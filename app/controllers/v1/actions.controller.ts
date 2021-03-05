import { Request, Response } from 'express';
import { ActionsModels } from '../../@models/actions.model';
import { ActionsModule } from '../../modules/v1/actions.module';

export class ActionsController {
  public async getAllActions( req: Request, res: Response) {
    res.json( await new ActionsModule().getAllActions() );
  }
  public async getActions( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new ActionsModule().getActions(id) );
  }
  public async updateActions( req: Request, res: Response) {
    const action: ActionsModels = req.body;
    const UID: string = `${req.headers.uid}`;
    res.json( await new ActionsModule().updateActions(UID, action) );
  }
  public async deleteActions( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const idTask: number = parseInt(req.params.idTask);
    const UID: string = `${req.headers.uid}`;
    res.json( await new ActionsModule().deleteActions(UID, id, idTask) );
  }
  public async createActions( req: Request, res: Response) {
    const action: ActionsModels = req.body;
    const UID: string = `${req.headers.uid}`;
    res.json( await new ActionsModule().createActions(UID, action) );
  }
}