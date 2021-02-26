import { ReturnServiceMS } from "../../@models/return-service.model";
import { StatusTasksModels } from "../../@models/status-tasks.model";
import { TasksModels } from "../../@models/tasks.model";
import { statusTasks } from "./status-tasks.module";
import { actions } from "./actions.module";

const tasks: TasksModels[] = [
  {
    idTask: 1,
    idProject: '1',
    title: "Tarea 1 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 1,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 2,
    idProject: '1',
    title: "Tarea 2 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 2,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 3,
    idProject: '1',
    title: "Tarea 3 Proyecto 1",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 3,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 4,
    idProject: '2',
    title: "Tarea 1 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 1,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 5,
    idProject: '2',
    title: "Tarea 2 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 2,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 6,
    idProject: '2',
    title: "Tarea 3 Proyecto 2",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 3,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 7,
    idProject: '3',
    title: "Tarea 1 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 1,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 8,
    idProject: '3',
    title: "Tarea 2 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 2,
    CREATE_DATE: new Date(),
    actions: []
  },
  {
    idTask: 9,
    idProject: '3',
    title: "Tarea 3 proyecto 3",
    details: "Detalle Tarea 1",
    assignedUser: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
    idStatus: 3,
    CREATE_DATE: new Date(),
    actions: []
  },
  
];
function getTasks(): TasksModels[] {
  tasks.map( valueT => {
    valueT.actions = actions.filter( value => value.idTask === valueT.idTask  );
  });
  return tasks;
}

export class TasksModule {
  public async getAllTask( ): Promise<ReturnServiceMS<TasksModels[]>> {
    return { payload: getTasks(), message: '', code: "200"};
  }
  public async getTask( id: number ) {
    const task: TasksModels | undefined = getTasks().find( value => value.idTask === id );
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
    task.idTask = Math.max.apply(Math, tasks.map(function(o) { return o.idTask; }))+1;
    tasks.push(task);
    return { payload: task, message: '', code: "200"};
  }
  public async statusTasks( query: {idProject?: string} ): Promise<ReturnServiceMS<StatusTasksModels[]>> {
    let statusTasksFInal: StatusTasksModels[] = [];
    statusTasks.forEach( statu => {
      const tasksFind: TasksModels[] = getTasks().filter( t => t.idStatus === statu.idStatus && ( query.idProject? t.idProject === query.idProject : true) );
      statusTasksFInal.push({
        idStatus: statu.idStatus,
        idEnterprise: statu.idEnterprise,
        name: statu.name,
        posicion: statu.posicion,
        isStateChange: statu.isStateChange,
        tasks: tasksFind
      })
    });

    return { payload: statusTasksFInal, message: '', code: "200"};
  }
}