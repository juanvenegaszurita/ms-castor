import { typeValue } from 'app/@models/report.model';
import { Request, Response } from 'express';
import { ReportModule } from '../../modules/v1/report.module';
import { HeadersModel } from '../../@models/headers.model';

export class ReportController {
  public async amountUserTask( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const anio: string = req.params.anio;
    const where = req.query;
    res.json( await new ReportModule().amountUserTask(headers.isAdmin, headers.idEnterprise, anio, where) );
  }
  public async workUserTime( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const anio: string = req.params.anio;
    const typeValue: typeValue = req.params.typeValue as typeValue;
    const where = req.query;
    res.json( await new ReportModule().workUserTime(headers.isAdmin, headers.idEnterprise, anio, typeValue, where) );
  }
}