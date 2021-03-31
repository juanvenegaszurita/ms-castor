import { Router } from 'express';

import { WebpayPlusRouter } from './webpay-plus.router';
import { PlanRouter } from './plan.router';


export class TransbankRouter {
  private static router: Router = Router();
  
  public static getRouter() {
    this.router.use('/webpayplus', WebpayPlusRouter.getRouter());
    this.router.use('/plan', PlanRouter.getRouter());

    return this.router;
  }
}