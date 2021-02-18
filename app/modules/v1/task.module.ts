import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.models";
import { TasksModels } from "../../@models/tasks.model";
import { StatusModel } from "../../@models/status.model";

const status: StatusModel[] = [
  {
    idStatus: 1,
    name: "Por Hacer"
  },
  {
    idStatus: 2,
    name: "Haciendo"
  },
  {
    idStatus: 3,
    name: "Finalizado"
  },
];
const tasks: TasksModels[] = [
  {
    idTask: 1,
    idProject: 1,
    title: "Tarea 1 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 1,
    CREATE_DATE: new Date()
  },
  {
    idTask: 2,
    idProject: 1,
    title: "Tarea 2 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 2,
    CREATE_DATE: new Date()
  },
  {
    idTask: 3,
    idProject: 1,
    title: "Tarea 3 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 3,
    CREATE_DATE: new Date()
  },
  {
    idTask: 4,
    idProject: 2,
    title: "Tarea 1 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 1,
    CREATE_DATE: new Date()
  },
  {
    idTask: 5,
    idProject: 2,
    title: "Tarea 2 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 2,
    CREATE_DATE: new Date()
  },
  {
    idTask: 6,
    idProject: 2,
    title: "Tarea 3 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 3,
    CREATE_DATE: new Date()
  },
  {
    idTask: 7,
    idProject: 3,
    title: "Tarea 1 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 1,
    CREATE_DATE: new Date()
  },
  {
    idTask: 8,
    idProject: 3,
    title: "Tarea 2 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 2,
    CREATE_DATE: new Date()
  },
  {
    idTask: 9,
    idProject: 3,
    title: "Tarea 3 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "1111",
    idStatus: 3,
    CREATE_DATE: new Date()
  },
  
];

export class TasksModule {
  public async getAllTask( ) {
    return { payload: 'Tasks getAllTarea', message: '', code: 200};
  }
  public async getTask( id: number ) {
    return { payload: 'Tasks getTarea'+id, message: '', code: 200};
  }
  public async updateTask( ) {
    return { payload: 'Tasks updateTarea', message: '', code: 200};
  }
  public async deleteTask( id: number ) {
    return { payload: 'Tasks deleteTarea'+id, message: '', code: 200};
  }
  public async createTask( task: TasksModels ) {
    tasks.push(task);
    return { payload: task, message: '', code: 200};
  }
  public async statusTasks( idProject: number ): Promise<ReturnServiceMS<StatusTasksModels[]>> {
    let statusTasks: StatusTasksModels[] = [];
    
    status.forEach( statu => {
      console.log(tasks);
      const tasksFind: TasksModels[] = tasks.filter( t => t.idStatus === statu.idStatus && t.idProject === idProject );
      statusTasks.push({
        idStatus: statu.idStatus,
        name: statu.name,
        tasks: tasksFind
      })
    });

    return { payload: statusTasks, message: '', code: "200"};
  }
}