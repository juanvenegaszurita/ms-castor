import { Router } from 'express';
import { PlanController } from '../../../controllers/v1/transbank/plan.controller';

export class PlanRouter {
  private static router: Router = Router();
  private static planController: PlanController = new PlanController();

  public static getRouter() {
    this.router.get('/details/:anio', this.planController.details);
    this.router.get('/history/:idEnterprisesPlans', this.planController.history);
    this.router.get('/enterprise', this.planController.enterprise);

    return this.router;
  }
}