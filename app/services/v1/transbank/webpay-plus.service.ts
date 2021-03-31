import { AxiosPromise } from "axios";
import { HttpClient } from '../../http-client';
import { environment } from '../../../../environments/environment';

import { WPCreateInModel, WPCreateOutModel } from "../../../@models/transbank/webpayplus/create.model";
import { WPCommitInModel, WPCommitOutModel } from "../../../@models/transbank/webpayplus/commit.model";
import { WPStatusInModel, WPStatusOutModel } from "../../../@models/transbank/webpayplus/status.model";
import { WPRefundInModel, WPRefundOutModel } from "../../../@models/transbank/webpayplus/refund.model";
import { WPCaptureInModel, WPCaptureOutModel } from "../../../@models/transbank/webpayplus/capture.model";

export class WebpayPlusService {
  private headers = {
    "Tbk-Api-Key-Id": environment.TRANSBANK_TBK_API_KEY_ID,
    "Tbk-Api-Key-Secret": environment.TRANSBANK_TBK_API_KEY_SECRET,
    "Content-Type": environment.TRANSBANK_CONTENT_TYPE
  }
  private http: HttpClient = new HttpClient(environment.TRANSBANK_URL_V1, this.headers);

  create(createIn: WPCreateInModel) {
    const url = '/rswebpaytransaction/api/webpay/v1.0/transactions';
    return this.http.post<WPCreateOutModel>(url, createIn);
  }
  commit(commitIn: WPCommitInModel): AxiosPromise<WPCommitOutModel> {
    const url = `/rswebpaytransaction/api/webpay/v1.0/transactions/${commitIn.token}`;
    return this.http.put<WPCommitOutModel>(url);
  }
  status(statusIn: WPStatusInModel): AxiosPromise<WPStatusOutModel> {
    const url = `/rswebpaytransaction/api/webpay/v1.0/transactions/${statusIn.token}`;
    return this.http.get<WPStatusOutModel>(url);
  }
  refund(refundIn: WPRefundInModel): AxiosPromise<WPRefundOutModel> {
    const url = `/rswebpaytransaction/api/webpay/v1.0/transactions/${refundIn.token}/refunds`;
    return this.http.post<WPRefundOutModel>(url, refundIn);
  }
  capture(captureIn: WPCaptureInModel): AxiosPromise<WPCaptureOutModel> {
    const url = `/rswebpaytransaction/api/webpay/v1.0/transactions/${captureIn.token}/capture`;
    return this.http.put<WPCaptureOutModel>(url, captureIn);
  }
}