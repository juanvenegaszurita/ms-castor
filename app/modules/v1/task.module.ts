import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.models";
import { TasksModels } from "../../@models/tasks.model";
import { statusTasks } from "./status-tasks.module";

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
  public async getAllTask( ): Promise<ReturnServiceMS<TasksModels[]>> {
    return { payload: tasks, message: '', code: "200"};
  }
  public async getTask( id: number ) {
    const task: TasksModels | undefined = tasks.find( value => value.idTask === id );
    return { payload: task, message: '', code: "200"};
  }
  public async updateTask( task: TasksModels ): Promise<ReturnServiceMS<TasksModels>> {
    tasks.forEach( (value, index) => {
      if( value.idTask === task.idTask ) {
        tasks[index] = task;
      }
    });
    return { payload: task, message: '', code: "200"};
  }
  public async deleteTask( id: number ) {
    tasks.forEach( (value, index) => {
      if( value.idTask === id )
        tasks.splice(index, 1);
    })
    return { payload: {}, message: 'Eliminado', code: "200"};
  }
  public async createTask( task: TasksModels ) {
    task.idTask = tasks.length+1;
    tasks.push(task);
    return { payload: task, message: '', code: "200"};
  }
  public async statusTasks( idProject: number ): Promise<ReturnServiceMS<StatusTasksModels[]>> {
    let statusTasksFInal: StatusTasksModels[] = [];
    
    statusTasks.forEach( statu => {
      const tasksFind: TasksModels[] = tasks.filter( t => t.idStatus === statu.idStatus && t.idProject === idProject );
      statusTasksFInal.push({
        idStatus: statu.idStatus,
        name: statu.name,
        posicion: statu.posicion,
        isStateChange: statu.isStateChange,
        tasks: tasksFind
      })
    });

    return { payload: statusTasksFInal, message: '', code: "200"};
  }
}