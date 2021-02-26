import { ActionsModels } from "./actions.model";

export interface TasksModels {
  idTask: number;
  idProject: string;
  title: string;
  details: string;
  assignedUser: string;
  idStatus: number;
  CREATE_DATE?: Date;
  actions: ActionsModels[];
}