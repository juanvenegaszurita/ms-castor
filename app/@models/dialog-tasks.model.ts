import { tasksModels } from './tasks.model';

export interface DialogTasksModels {
  type: typeDialog;
  task?: tasksModels;
}
type typeDialog = 'VIEW' | 'EDIT' | 'NEW' | 'DELETE';

export enum enumTypeDialog{
  EDIT = "EDIT",
  NEW = "NEW",
  DELETE = "DELETE",
  VIEW = "VIEW",
}