import { Router } from 'express';
import { WebpayPlusController } from '../../../controllers/v1/transbank/webpay-plus.controller';

export class WebpayPlusRouter {
  private static router: Router = Router();
  private static webpayPlusController: WebpayPlusController = new WebpayPlusController();

  public static getRouter() {
    this.router.post('/create', this.webpayPlusController.create);
    this.router.put('/commit/:token', this.webpayPlusController.commit);
    this.router.get('/status/:token/:UID', this.webpayPlusController.status);
    this.router.post('/refund/:token', this.webpayPlusController.refund);
    this.router.put('/capture/:token', this.webpayPlusController.capture);

    this.router.post('/retorno', this.webpayPlusController.retorno);
    
    return this.router;
  }
}