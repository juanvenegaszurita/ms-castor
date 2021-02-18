export interface TasksModels {
  idTask: number;
  idProject: number;
  title: string;
  details: string;
  assignedUser: string;
  idStatus: number;
  CREATE_DATE?: Date;
}