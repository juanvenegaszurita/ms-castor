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
    res.json( await new ActionsModule().updateActions(action) );
  }
  public async deleteActions( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new ActionsModule().deleteActions(id) );
  }
  public async createActions( req: Request, res: Response) {
    const action: ActionsModels = req.body;
    res.json( await new ActionsModule().createActions(action) );
  }
}