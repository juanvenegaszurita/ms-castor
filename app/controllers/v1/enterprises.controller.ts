import { Request, Response } from 'express';
import { EnterprisesModule } from '../../modules/v1/enterprises.module';

export class EnterprisesController {
  public async getAllEnterprise( req: Request, res: Response) {
    res.json( await new EnterprisesModule().getAllEnterprise() );
  }
  public async getEnterprise( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new EnterprisesModule().getEnterprise(id) );
  }
  public async updateEnterprise( req: Request, res: Response) {
    res.json( await new EnterprisesModule().updateEnterprise() );
  }
  public async deleteEnterprise( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new EnterprisesModule().deleteEnterprise(id) );
  }
  public async createEnterprise( req: Request, res: Response) {
    res.json( await new EnterprisesModule().createEnterprise() );
  }
}