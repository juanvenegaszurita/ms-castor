import { Request, Response } from 'express';
import { ActionsModels } from '../../@models/actions.model';
import { ActionsModule } from '../../modules/v1/actions.module';
import { HeadersModel } from '../../@models/headers.model';
import { EncryptionUtils } from '../../utils/encryption.utils';

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
    const headers = res.locals as HeadersModel;
    res.json( await new ActionsModule().updateActions(headers.UID, action) );
  }
  public async deleteActions( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    const idTask: number = parseInt(req.params.idTask);
    const headers = res.locals as HeadersModel;
    res.json( await new ActionsModule().deleteActions(headers.UID, id, idTask) );
  }
  public async createActions( req: Request, res: Response) {
    const action: ActionsModels = req.body;
    const headers = res.locals as HeadersModel;
    res.json( await new ActionsModule().createActions(headers.UID, action) );
  }
}