import { ReturnServiceMS } from "../../@models/return-service.model";
import { TasksModels } from "../../@models/tasks.model";
import { HistoryTasks } from "../../bd/history-task.bd";
import { Tasks } from "../../bd/tasks.bd";

export class TasksModule {
  public async getAllTask( identerprise: number ): Promise<ReturnServiceMS<Tasks[]>> {
    const tasks = await Tasks.getAllTask(identerprise);
    return { payload: tasks, message: '', code: "200"};
  }
  public async getTask( id: number, identerprise: number ): Promise<ReturnServiceMS<Tasks | null>> {
    const task = await Tasks.getTask(id, identerprise);
    return { payload: task, message: '', code: "200"};
  }
  public async updateTask( UID: string, task: TasksModels ): Promise<ReturnServiceMS<TasksModels>> {
    const taskUpdate = await Tasks.update( task, {where: { idTask: task.idTask }} );
    if( taskUpdate.length > 0 ) {
      HistoryTasks.updateTask(UID, task);
      return { payload: task, message: '', code: "200"};
    }
    else
      return { payload: task, message: 'Error al actualziar', code: "200"};
  }
  public async deleteTask( UID: string, id: number ): Promise<ReturnServiceMS<{}>> {
    const taskDelete = await Tasks.update( { isDelete: true },{where: { idTask: id }} );
    if( taskDelete.length > 0 ) {
      HistoryTasks.deleteTask(UID, id);
      return { payload: {}, message: '', code: "200"};
    } else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createTask( UID: string, task: TasksModels ): Promise<ReturnServiceMS<Tasks>> {
    const taskCreate = await Tasks.create( task, {isNewRecord:true} );
    task.idTask = parseInt(`${taskCreate.getDataValue('idTask')}`);
    HistoryTasks.createTask(UID, task);
    return { payload: taskCreate, message: "", code: "200" };
  }
  public async statusTasks( identerprise: number, query: {idProject?: number}, isAdmin: boolean ): Promise<ReturnServiceMS<any>> {
    const statusTasksFInal = await Tasks.statusTasks(identerprise, query, isAdmin);
    return { payload: statusTasksFInal, message: '', code: "200"};
  }
}