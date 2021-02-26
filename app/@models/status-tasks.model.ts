import { TasksModels } from './tasks.model';

export interface StatusTasksModels {
  idStatus: number;
  idEnterprise: number;
  name: string;
  posicion: number;
  isStateChange: boolean;
  tasks?: TasksModels[];
}