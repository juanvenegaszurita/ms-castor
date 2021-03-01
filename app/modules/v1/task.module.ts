import { ReturnServiceMS } from "../../@models/return-service.model";
import { TasksModels } from "../../@models/tasks.model";
import { Tasks } from "../../bd/tasks.bd";

export class TasksModule {
  public async getAllTask( ): Promise<ReturnServiceMS<Tasks[]>> {
    const tasks = await Tasks.getAllTask();
    return { payload: tasks, message: '', code: "200"};
  }
  public async getTask( id: number ): Promise<ReturnServiceMS<Tasks | null>> {
    const task = await Tasks.getTask(id);
    return { payload: task, message: '', code: "200"};
  }
  public async updateTask( task: TasksModels ): Promise<ReturnServiceMS<TasksModels>> {
    const taskUpdate = await Tasks.update( task, {where: { idTask: task.idTask }} );
    if( taskUpdate.length > 0 )
      return { payload: task, message: '', code: "200"};
    else
      return { payload: task, message: 'Error al actualziar', code: "200"};
  }
  public async deleteTask( id: number ): Promise<ReturnServiceMS<{}>> {
    const taskDelete = await Tasks.destroy( {where: { idTask: id }} );
    if( taskDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createTask( task: TasksModels ): Promise<ReturnServiceMS<Tasks>> {
    const taskCreate = await Tasks.create( task );
    return { payload: taskCreate, message: "", code: "200" };
  }
  public async statusTasks( query: {idProject?: number} ): Promise<ReturnServiceMS<any>> {
    const statusTasksFInal = await Tasks.statusTasks(query);
    return { payload: statusTasksFInal, message: '', code: "200"};
  }
}