import { environment } from '../../../environments/environment';
import { MailerService } from '../../services/v1/mailer.service';
import { SendMailOptions } from '../../@models/send-mail-options.model';

export class MailerModule {
  private mailerService: MailerService = new MailerService(environment.MAILER_USER, environment.MAILER_PASS);

  async sendSimpleMail(data: SendMailOptions) {
    try {
      await this.mailerService.sendEmail(data)
      return { payload: data, message: 'Email Enviado', code: 200};
    } catch (error) {
      return { payload: error.name, message: 'Error al enviar Email', code: 400};
    }
  }
}