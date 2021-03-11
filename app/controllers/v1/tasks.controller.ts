import { Request, Response } from 'express';
import { TasksModule } from '../../modules/v1/task.module';
import { TasksModels } from '../../@models/tasks.model';

export class TasksController {
  public async getAllTask( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new TasksModule().getAllTask(identerprise) );
  }
  public async getTask( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    const id: number = parseInt(req.params.id);
    res.json( await new TasksModule().getTask(id, identerprise) );
  }
  public async updateTask( req: Request, res: Response) {
    const task: TasksModels = req.body;
    const UID: string = `${req.headers.uid}`;
    res.json( await new TasksModule().updateTask(UID, task) );
  }
  public async deleteTask( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const UID: string = `${req.headers.uid}`;
    res.json( await new TasksModule().deleteTask(UID, id) );
  }
  public async createTask( req: Request, res: Response) {
    const task: TasksModels = req.body;
    const UID: string = `${req.headers.uid}`;
    res.json( await new TasksModule().createTask(UID, task) );
  }
  public async statusTasks( req: Request, res: Response) {
    const isAdmin: boolean = req.headers.isadmin === 'true';
    const identerprise: number = parseInt(req.headers.identerprise+'');
    const UID: string = `${req.headers.uid}`;
    res.json( await new TasksModule().statusTasks( identerprise, req.query, isAdmin, UID ) );
  }
}