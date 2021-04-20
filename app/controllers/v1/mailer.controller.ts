import { Request, Response } from 'express';
import { MailerModule } from '../../modules/v1/mailer.module';
import { SendMailOptions } from '../../@models/send-mail-options.model';

export class MailerController {
  public async sendSimpleMail( req: Request, res: Response) {
    const data = req.body as SendMailOptions;
    res.json( await new MailerModule().sendSimpleMail(data) );
  }
}