import { ActionsModels } from "./actions.model";
import { HistoryTaskModel } from "./history-task.model";

export interface TasksModels {
  idTask: number;
  idProject: string;
  title: string;
  details: string;
  assignedUser: string;
  idStatus: number;
  CREATE_DATE?: Date;
  isDelete?: boolean;
  actions: ActionsModels[];
  historytasks?: HistoryTaskModel[];
  color?: string;
}