import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.model";
import { StatusTasks } from "../../bd/status-tasks.bd";

export class StatusTasksModule {
  public async getAllStatustask( ): Promise<ReturnServiceMS<StatusTasks[]>> {
    const statusTasks = await StatusTasks.findAll();
    return { payload: statusTasks, message: '', code: "200"};
  }
  public async getStatustask( id: number ): Promise<ReturnServiceMS<StatusTasks | null>> {
		const statusTask = await StatusTasks.findByPk(id);
    return { payload: statusTask, message: '', code: "200"};
  }
  public async updateStatustask(statusTask: StatusTasksModels) {
    const statusTaskUpdate = await StatusTasks.update( statusTask, {where: { idStatus: statusTask.idStatus }} );
    if( statusTaskUpdate.length > 0 )
      return { payload: statusTask, message: '', code: "200"};
    else
      return { payload: statusTask, message: 'Error al actualziar', code: "200"};
  }
  public async deleteStatustask( id: number ) {
    const statusTaskDelete = await StatusTasks.destroy( {where: { idStatus: id }} );
    if( statusTaskDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createStatustask( statusTask: StatusTasksModels ) {
    const statusTaskCreate = await StatusTasks.create( statusTask );
    return { payload: statusTaskCreate, message: '', code: "200"};
  }
}