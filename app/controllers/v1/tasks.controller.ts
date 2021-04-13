import { Request, Response } from 'express';
import { TasksModule } from '../../modules/v1/task.module';
import { TasksModels } from '../../@models/tasks.model';
import { HeadersModel } from '../../@models/headers.model';

export class TasksController {
  public async getAllTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    res.json( await new TasksModule().getAllTask(headers.idEnterprise) );
  }
  public async getTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const id: number = parseInt(req.params.id);
    res.json( await new TasksModule().getTask(id, headers.idEnterprise) );
  }
  public async updateTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const task: TasksModels = req.body;
    res.json( await new TasksModule().updateTask(headers.UID, task) );
  }
  public async deleteTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const id: number = parseInt(req.params.id);
    res.json( await new TasksModule().deleteTask(headers.UID, id) );
  }
  public async createTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const task: TasksModels = req.body;
    res.json( await new TasksModule().createTask(headers.UID, task) );
  }
  public async statusTasks( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const UID: string = `${req.headers.uid}`;
    res.json( await new TasksModule().statusTasks( headers.idEnterprise, req.query, headers.isAdmin, UID ) );
  }
}