import { ReturnServiceMS } from "../../../@models/return-service.model";

import { WPCreateInModel, WPCreateOutModel } from "../../../@models/transbank/webpayplus/create.model";
import { WPCommitInModel, WPCommitOutModel } from "../../../@models/transbank/webpayplus/commit.model";
import { WPStatusInModel, WPStatusOutModel } from "../../../@models/transbank/webpayplus/status.model";
import { WPRefundInModel, WPRefundOutModel } from "../../../@models/transbank/webpayplus/refund.model";
import { WPCaptureInModel, WPCaptureOutModel } from "../../../@models/transbank/webpayplus/capture.model";
import { StatusTransactions } from "../../../@models/transbank/webpayplus/transaction.model";
import { TransbankModels } from '../../../@models/transbank-model';

import { WebpayPlusService } from "../../../services/v1/transbank/webpay-plus.service";

import { Transbank } from "../../../bd/transbank.bd";
import { EnterprisesPlans } from "../../../bd/enterprises-plans.bd";

export class WebpayPlusModule {
  private webpayPlusService: WebpayPlusService = new WebpayPlusService();
  public async create(createIn: WPCreateInModel): Promise<ReturnServiceMS<WPCreateOutModel>> {
    try {
      const createWS: WPCreateInModel = {
        amount: createIn.amount,
        buy_order: createIn.buy_order,
        session_id: createIn.session_id,
        return_url: createIn.return_url,
      };
      const out = await this.webpayPlusService.create(createWS);
      const outData: WPCreateOutModel = out.data as WPCreateOutModel;
      const transbank: TransbankModels = {
        token: outData.token,
        buy_order: createIn.buy_order,
        anio: createIn.anio,
        mes: createIn.mes,
        status: StatusTransactions.INITIALIZED,
        idEnterprise: createIn.idEnterprise,
        transaction_date: new Date(),
        idEnterprisesPlans: createIn.idEnterprisesPlans,
      }
      const transbankBD = await Transbank.create(transbank);
      return { payload: out.data, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async commit(commitIn: WPCommitInModel): Promise<ReturnServiceMS<WPCommitOutModel>> {
    try {
      const out = await this.webpayPlusService.commit(commitIn);
      return { payload: out.data, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async status(statusIn: WPStatusInModel): Promise<ReturnServiceMS<WPStatusOutModel | {}>> {
    try {
      let outData: WPStatusOutModel;
      const transbankOne = await Transbank.TransbankEnterprisesUser(statusIn.token, `${statusIn.UID}`);
      if( transbankOne ) {
        if( transbankOne.getDataValue("status") === StatusTransactions.INITIALIZED ) {
          let transbank: TransbankModels;
          try {
            const commit = await this.webpayPlusService.commit({ token: statusIn.token });
            outData = commit.data as WPCommitOutModel;
            transbank = {
              status: outData.status,
              jsonTransbank: JSON.stringify(outData)
            }
            const ep = await EnterprisesPlans.update({pagado: true}, {where: { idEnterprisesPlans: transbankOne.getDataValue('idEnterprisesPlans') }});
          } catch (error) {
            const status = await this.webpayPlusService.status(statusIn);
            outData = status.data as WPStatusOutModel;
            outData.status = StatusTransactions.NULLIFIED;
            transbank = {
              status: outData.status,
              jsonTransbank: JSON.stringify(outData)
            }
          }
          const transbankBD = await Transbank.update(transbank, {where: {token: statusIn.token}});
        } else {
          if( transbankOne.getDataValue("jsonTransbank") ) {
            outData = JSON.parse(transbankOne.getDataValue("jsonTransbank"));
          } else {
            const status = await this.webpayPlusService.status(statusIn);
            outData = status.data as WPStatusOutModel;
            const transbank: TransbankModels = {
              status: outData.status,
              jsonTransbank: JSON.stringify(outData)
            }
            const transbankBD = await Transbank.update(transbank, {where: {token: statusIn.token}})
          }
        }
        outData.enterprise = transbankOne.getDataValue("enterprise");
        return { payload: outData, message: "", code: "200" };
      } else {
        return { payload: {}, message: "No Existe Transanción", code: "400" };
      }
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async refund(refundIn: WPRefundInModel): Promise<ReturnServiceMS<WPRefundOutModel>> {
    try {
      const out = await this.webpayPlusService.refund(refundIn);
      return { payload: out.data, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async capture(captureIn: WPCaptureInModel): Promise<ReturnServiceMS<WPCaptureOutModel>> {
    try {
      const out = await this.webpayPlusService.capture(captureIn);
      return { payload: out.data, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
}