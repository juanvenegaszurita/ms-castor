import { Router } from 'express';
import { RouterV1 } from './v1';

export class Routers {
  private static router: Router = Router();

  public static getRouters() {
    this.router.use( '/v1', RouterV1.v1() );
    return this.router;
  }
}