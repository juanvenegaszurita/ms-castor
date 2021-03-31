import { EnterprisesModel } from "app/@models/enterprises.model";
import { WPTransactionModel } from "./transaction.model";

export interface WPStatusInModel {
  /**
   Token de la transacción. Largo: 64. (Se envía en la URL, no en el body)
    */
  token: string;
  /**
   UID User: se agrega para complemento de información
   */
  UID?: string;
}
export interface WPStatusOutModel extends WPTransactionModel {
  enterprise?: EnterprisesModel;
}