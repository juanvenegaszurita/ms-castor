import { Router } from 'express';
import { MailerController } from '../../controllers/v1/mailer.controller';

export class MailerRouter {
  private static router: Router = Router();
  private static mailerController: MailerController = new MailerController();

  public static getRouter() {
    this.router.post('/sendSimpleMail', this.mailerController.sendSimpleMail);

    return this.router;
  }
}