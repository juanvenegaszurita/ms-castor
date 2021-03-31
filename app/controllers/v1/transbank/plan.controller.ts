import { Request, Response } from 'express';
import { PlanModule } from '../../../modules/v1/transbank/plan.module';

export class PlanController {
  public async details( req: Request, res: Response) {
    const anio: number = parseInt( `${req.params.anio}` );
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new PlanModule().details(identerprise, anio) );
  }
  public async history( req: Request, res: Response) {
    const idEnterprisesPlans: number = parseInt( `${req.params.idEnterprisesPlans}` );
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new PlanModule().history(identerprise, idEnterprisesPlans) );
  }
  public async enterprise( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new PlanModule().enterprise(identerprise) );
  }
}