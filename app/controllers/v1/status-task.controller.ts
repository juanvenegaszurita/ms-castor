import { Request, Response } from 'express';
import { StatusTasksModule } from '../../modules/v1/status-tasks.module';
import { StatusTasksModels } from '../../@models/status-tasks.model';

export class StatustaskController {
  public async getAllStatustask( req: Request, res: Response) {
    res.json( await new StatusTasksModule().getAllStatustask() );
  }
  public async getStatustask( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new StatusTasksModule().getStatustask(id) );
  }
  public async updateStatustask( req: Request, res: Response) {
    const statustask: StatusTasksModels = req.body;
    res.json( await new StatusTasksModule().updateStatustask(statustask) );
  }
  public async deleteStatustask( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new StatusTasksModule().deleteStatustask(id) );
  }
  public async createStatustask( req: Request, res: Response) {
    const statustask: StatusTasksModels = req.body;
    res.json( await new StatusTasksModule().createStatustask(statustask) );
  }
}