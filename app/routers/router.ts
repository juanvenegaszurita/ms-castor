import { FirebaseMDW } from '../middleware/firebase-mdw';
import { Request, Response, Router } from 'express';
import { RouterV1 } from './v1';
import { ScheduledTasksRouter } from './v1/scheduled-tasks.router';
import { MailerRouter } from './v1/mailer.router';

export class Routers {
  private static router: Router = Router();

  public static getRouters() {
    this.router.use( '/v1', FirebaseMDW.verifyToken ,RouterV1.v1() );
    this.router.use( '/scheduledTasks', ScheduledTasksRouter.getRouter());
    this.router.use( '/mailer', MailerRouter.getRouter());
    this.router.use( '/tareas/:estado', async (request: Request, response: Response) => {
      response.send("ok")
    });
    return this.router;
  }
}