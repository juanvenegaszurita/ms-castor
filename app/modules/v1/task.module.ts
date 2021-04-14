import { environment } from "../../../environments/environment";
import { ReturnServiceMS } from "../../@models/return-service.model";
import { TasksModels } from "../../@models/tasks.model";
import { HistoryTasks } from "../../bd/history-task.bd";
import { Tasks } from "../../bd/tasks.bd";
import { FirebaseService, TypeNotifications } from '../../services/v1/firebase.service';

export class TasksModule {
  public async getAllTask( identerprise: number ): Promise<ReturnServiceMS<Tasks[]>> {
    const tasks = await Tasks.getAllTask(identerprise);
    return { payload: tasks, message: '', code: "200"};
  }
  public async getTask( id: number, identerprise: number ): Promise<ReturnServiceMS<Tasks | null>> {
    const task = await Tasks.getTask(id, identerprise);
    return { payload: task, message: '', code: "200"};
  }
  public async updateTask( UID: string, identerprise: number, task: TasksModels ): Promise<ReturnServiceMS<TasksModels>> {
    const taskUpdate = await Tasks.update( task, {where: { idTask: task.idTask }} );
    if( taskUpdate.length > 0 ) {
      HistoryTasks.updateTask(UID, task);
      FirebaseService.insertNotifications(`${environment.MSN_NOTIF_TASKS_UPDATE} N° ${task.idTask} ${task.title}`, identerprise, TypeNotifications.TASKS, true);
      return { payload: task, message: '', code: "200"};
    }
    else
      return { payload: task, message: 'Error al actualziar', code: "200"};
  }
  public async deleteTask( UID: string, identerprise: number, id: number ): Promise<ReturnServiceMS<{}>> {
    const taskDelete = await Tasks.update( { isDelete: true },{where: { idTask: id }} );
    if( taskDelete.length > 0 ) {
      HistoryTasks.deleteTask(UID, id);
      FirebaseService.insertNotifications(`${environment.MSN_NOTIF_TASKS_DELETE} N° ${id}`, identerprise, TypeNotifications.TASKS, true);
      return { payload: {}, message: '', code: "200"};
    } else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createTask( UID: string, identerprise: number, task: TasksModels ): Promise<ReturnServiceMS<Tasks>> {
    const taskCreate = await Tasks.create( task, {isNewRecord:true} );
    task.idTask = parseInt(`${taskCreate.getDataValue('idTask')}`);
    HistoryTasks.createTask(UID, task);
    FirebaseService.insertNotifications(`${environment.MSN_NOTIF_TASKS_INSERT} N° ${task.idTask} ${task.title}`, identerprise, TypeNotifications.TASKS, true);
    return { payload: taskCreate, message: "", code: "200" };
  }
  public async statusTasks( identerprise: number, query: {idProject?: number}, isAdmin: boolean, UID: string ): Promise<ReturnServiceMS<any>> {
    const statusTasksFInal = await Tasks.statusTasks(identerprise, query, isAdmin, UID);
    return { payload: statusTasksFInal, message: '', code: "200"};
  }
}