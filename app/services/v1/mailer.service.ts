import { createTransport, Transporter } from 'nodemailer';
import { SendMailOptions } from '../../@models/send-mail-options.model';

export class MailerService {
  private mailTransport: Transporter;

  constructor(user: string, pass: string) {
    this.mailTransport = createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  }
  sendEmail(mailer: SendMailOptions) {
    return this.mailTransport.sendMail(mailer);
  }
}