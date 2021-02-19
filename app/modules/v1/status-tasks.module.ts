import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.models";

export const statusTasks: StatusTasksModels[] = [
	{
    idStatus: 1,
    name: "Por Hacer",
		posicion: 1,
		isStateChange: true,
  },
  {
    idStatus: 2,
    name: "Haciendo",
		posicion: 2,
		isStateChange: true,
  },
  {
    idStatus: 3,
    name: "Finalizado",
		posicion: 3,
		isStateChange: false,
  },
];

export class StatusTasksModule {
  public async getAllStatustask( ): Promise<ReturnServiceMS<StatusTasksModels[]>> {
    return { payload: statusTasks, message: '', code: "200"};
  }
  public async getStatustask( id: number ): Promise<ReturnServiceMS<StatusTasksModels | undefined>> {
		const statusTask: StatusTasksModels | undefined = statusTasks.find( value => value.idStatus === id );
    return { payload: statusTask, message: '', code: "200"};
  }
  public async updateStatustask( ) {
    return { payload: 'Tasks updateTarea', message: '', code: "200"};
  }
  public async deleteStatustask( id: number ) {
    return { payload: 'Tasks deleteTarea'+id, message: '', code: "200"};
  }
  public async createStatustask( statusTask: StatusTasksModels ) {
    statusTasks.push(statusTask);
    return { payload: statusTasks, message: '', code: "200"};
  }
}