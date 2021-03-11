import { typeValue } from 'app/@models/report.model';
import { Request, Response } from 'express';
import { ReportModule } from '../../modules/v1/report.module';

export class ReportController {
  public async amountUserTask( req: Request, res: Response) {
    const isAdmin: boolean = req.headers.isadmin === 'true';
    const identerprise: number = parseInt(req.headers.identerprise+'');
    const anio: string = req.params.anio;
    const where = req.query;
    res.json( await new ReportModule().amountUserTask(isAdmin, identerprise, anio, where) );
  }
  public async workUserTime( req: Request, res: Response) {
    const isAdmin: boolean = req.headers.isadmin === 'true';
    const identerprise: number = parseInt(req.headers.identerprise+'');
    const anio: string = req.params.anio;
    const typeValue: typeValue = req.params.typeValue as typeValue;
    const where = req.query;
    res.json( await new ReportModule().workUserTime(isAdmin, identerprise, anio, typeValue, where) );
  }
}