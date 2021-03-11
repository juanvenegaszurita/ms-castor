import { Router } from 'express';
import { ReportController } from '../../controllers/v1/report.controller';

export class ReportRouter {
  private static router: Router = Router();
  private static reportController: ReportController = new ReportController();

  public static getRouter() {
    this.router.get('/amountUserTask/:anio', this.reportController.amountUserTask);
    this.router.get('/workUserTime/:anio/:typeValue', this.reportController.workUserTime);

    return this.router;
  }
}