export interface WPRefundInModel {
  /**
   Token de la transacción. Largo: 64. (Se envía en la URL, no en el body)
    */
  token: string;
  /**
   Monto que se desea anular o reversar de la transacción. Largo máximo: 17.
   Formato número entero para transacciones en peso. Sólo en caso de dólar acepta dos decimales.
   */
   amount: number;
}
export interface WPRefundOutModel {
  /**
   Tipo de reembolso (REVERSED o NULLIFIED).
   Si es REVERSED no se devolverán datos de la transacción (authorization code, etc). Largo máximo: 10
   */
  type: string;
  /**
   (Solo si es NULLIFIED) Código de autorización de la anulación. Largo máximo: 6
   */
  authorization_code?: string;
  /**
   (Solo si es NULLIFIED) Fecha y hora de la autorización.
   */
  authorization_date?: string;
  /**
   (Solo si es NULLIFIED) Saldo actualizado de la transacción (considera la venta menos el monto anulado). Largo máximo: 17
   */
  nullified_amount?: number;
  /**
   (Solo si es NULLIFIED) Monto anulado. Largo máximo: 17
   */
  balance?: number;
  /**
   (Solo si es NULLIFIED) Código de resultado de la reversa/anulacion.
   Si es exitoso es 0, de lo contrario la reversa/anulación no fue realizada
   Largo Máximo: 2
   */
  response_code?: number;
}
export enum codeErrorRefund {
  /** Validación de campos de entrada nulos */
  'C_304' = '304',
  /** Código de comercio no existe */
  'C_245' = '245',
  /** El comercio no se encuentra activo */
  'C_22' = '22',
  /** El comercio indicado no corresponde al certificado o no es hijo del comercio MALL en caso de transacciones MALL */
  'C_316' = '316',
  /** Operación no permitida */
  'C_308' = '308',
  /** Transacción no encontrada */
  'C_274' = '274',
  /** La transacción no permite anulación */
  'C_16' = '16',
  /** La transacción no está autorizada */
  'C_292' = '292',
  /** Periodo de anulación excedido */
  'C_284' = '284',
  /** Transacción anulada previamente */
  'C_310' = '310',
  /** Monto a anular excede el saldo disponible para anular */
  'C_311' = '311',
  /** Error genérico para anulaciones */
  'C_312' = '312',
  /** Error del autorizador */
  'C_315' = '315',
  /** La transacción no permite anulación parcial de transacciones con cuotas */
  'C_53' = '53',
}