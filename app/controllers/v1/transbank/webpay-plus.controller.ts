import { Request, Response } from 'express';
import { WebpayPlusModule } from '../../../modules/v1/transbank/webpay-plus.module';

import { WPCaptureInModel } from '../../../@models/transbank/webpayplus/capture.model';
import { WPCommitInModel } from '../../../@models/transbank/webpayplus/commit.model';
import { WPCreateInModel } from '../../../@models/transbank/webpayplus/create.model';
import { WPRefundInModel } from '../../../@models/transbank/webpayplus/refund.model';
import { WPStatusInModel } from '../../../@models/transbank/webpayplus/status.model';
import { environment } from '../../../../environments/environment';

export class WebpayPlusController {
  public async create( req: Request, res: Response) {
    const createIn: WPCreateInModel = req.body;
    res.json( await new WebpayPlusModule().create(createIn) );
  }
  public async commit( req: Request, res: Response) {
    const { token } = req.params;
    const commitIn: WPCommitInModel = { token };
    res.json( await new WebpayPlusModule().commit(commitIn) );
  }
  public async status( req: Request, res: Response) {
    const { token, UID } = req.params;
    const commitIn: WPStatusInModel = { token, UID };
    res.json( await new WebpayPlusModule().status(commitIn) );
  }
  /**
   El método Transaction.refund() debe ser invocado siempre indicando el código del comercio que realizó la transacción. En el caso de comercios Webpay Plus Mall, el código debe ser el código de la tienda virtual específica. 
   */
  public async refund( req: Request, res: Response) {
    const { token } = req.params;
    const { amount } = req.body;
    const refundIn: WPRefundInModel = { token, amount };
    res.json( await new WebpayPlusModule().refund(refundIn) );
  }
  public async capture( req: Request, res: Response) {
    const captureIn: WPCaptureInModel = req.body
    res.json( await new WebpayPlusModule().capture(captureIn) );
  }
  public async retorno( req: Request, res: Response) {
    const token = req.body?.token_ws ? req.body.token_ws : (req.body?.TBK_TOKEN ? req.body.TBK_TOKEN : "")
    const url = `${environment.URL_CASTOR}/transbank/wpRetorno/${token}`;
    res.render("redirect-transbank", { url });
  }
}