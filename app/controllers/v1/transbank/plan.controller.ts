import { Request, Response } from 'express';
import { PlanModule } from '../../../modules/v1/transbank/plan.module';
import { HeadersModel } from '../../../@models/headers.model';

export class PlanController {
  public async details( req: Request, res: Response) {
    const anio: number = parseInt( `${req.params.anio}` );
    const headers = res.locals as HeadersModel;
    res.json( await new PlanModule().details(headers.idEnterprise, anio) );
  }
  public async history( req: Request, res: Response) {
    const idEnterprisesPlans: number = parseInt( `${req.params.idEnterprisesPlans}` );
    const headers = res.locals as HeadersModel;
    res.json( await new PlanModule().history(headers.idEnterprise, idEnterprisesPlans) );
  }
  public async enterprise( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    res.json( await new PlanModule().enterprise(headers.idEnterprise) );
  }
}