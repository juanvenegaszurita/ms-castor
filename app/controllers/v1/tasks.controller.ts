import { Request, Response } from 'express';
import { TasksModule } from '../../modules/v1/task.module';
import { TasksModels } from '../../@models/tasks.model';

export class TasksController {
  public async getAllTask( req: Request, res: Response) {
    res.json( await new TasksModule().getAllTask() );
  }
  public async getTask( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new TasksModule().getTask(id) );
  }
  public async updateTask( req: Request, res: Response) {
    res.json( await new TasksModule().updateTask() );
  }
  public async deleteTask( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new TasksModule().deleteTask(id) );
  }
  public async createTask( req: Request, res: Response) {
    const task: TasksModels = req.body;
    res.json( await new TasksModule().createTask(task) );
  }
  public async statusTasks( req: Request, res: Response) {
    const idProject: number = parseInt(req.params.idProject);
    res.json( await new TasksModule().statusTasks(idProject) );
  }
}