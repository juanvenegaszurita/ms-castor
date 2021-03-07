import { TasksModels } from './tasks.model';

export interface DialogTasksModels {
  type: typeDialog;
  task?: TasksModels;
}
type typeDialog = 'VIEW' | 'EDIT' | 'NEW' | 'DELETE';

export enum enumTypeDialog{
  EDIT = "EDIT",
  NEW = "NEW",
  DELETE = "DELETE",
  VIEW = "VIEW",
}