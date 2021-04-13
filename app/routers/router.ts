import { FirebaseMDW } from '../middleware/firebase-mdw';
import { Router } from 'express';
import { RouterV1 } from './v1';

export class Routers {
  private static router: Router = Router();

  public static getRouters() {
    this.router.use( '/v1', FirebaseMDW.verifyToken ,RouterV1.v1() );
    return this.router;
  }
}