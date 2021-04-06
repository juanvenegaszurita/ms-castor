import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.model";
import { StatusTasks } from "../../bd/status-tasks.bd";

export class StatusTasksModule {
  public async getAllStatustask( idEnterprise: number ): Promise<ReturnServiceMS<StatusTasks[]>> {
    const statusTasks = await StatusTasks.getStatusTasks(idEnterprise);
    return { payload: statusTasks, message: '', code: "200"};
  }
  public async getStatustask( idEnterprise: number, id: number ): Promise<ReturnServiceMS<StatusTasks | null>> {
		const statusTask = await StatusTasks.getStatusTasks(idEnterprise, id);
    const status = ( statusTask && statusTask.length > 0 ) ? statusTask[0] : null;
    return { payload: status, message: '', code: "200"};
  }
  public async updateStatustask(statusTask: StatusTasksModels) {
    const statusTaskUpdate = await StatusTasks.update( statusTask, {where: { idStatus: statusTask.idStatus }} );
    if( statusTaskUpdate.length > 0 ) {

      const statusTaskFinal = await StatusTasks.getStatusTasks(statusTask.idEnterprise, statusTask.idStatus);
      const status = ( statusTaskFinal && statusTaskFinal.length > 0 ) ? statusTaskFinal[0] : null;
      return { payload: status, message: '', code: "200"};
    } else
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
    const statusTaskFinal = await StatusTasks.getStatusTasks(statusTaskCreate.getDataValue('idEnterprise'), statusTaskCreate.getDataValue('idStatus'));
    const status = ( statusTaskFinal && statusTaskFinal.length > 0 ) ? statusTaskFinal[0] : null;

    return { payload: status, message: '', code: "200"};
  }
}