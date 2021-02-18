import { TasksModels } from './tasks.model';

export interface StatusTasksModels {
  idStatus: number;
  name: string;
  tasks: TasksModels[];
}