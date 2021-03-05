import { UsersModel } from "./users.model";

export interface HistoryTaskModel {
  idHistoryTask?: number;
  nameTable: string;
  descriptions: string;
  CREATE_DATE: Date;
  UID: string;
  idTask: number;
  user?: UsersModel;
}
