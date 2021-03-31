import { WPTransactionModel } from "./transaction.model";

export interface WPCommitInModel {
  /**
   Token de la transacción. Largo: 64. (Se envía en la URL, no en el body)
   */
  token: string;
}
export interface WPCommitOutModel extends WPTransactionModel {
  
}