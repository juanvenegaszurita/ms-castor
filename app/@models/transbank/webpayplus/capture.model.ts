export interface WPCaptureInModel {
  /**
   Token de la transacción. Largo: 64. (Se envía en la URL, no en el body)
  */
  token: string;
  /**
   (Opcional, solo usar en caso Mall) Tienda hija que realizó la transacción. Largo: 12.
  */
  commerce_code: number;
  /**
   Orden de compra de la transacción que se requiere capturar. Largo máximo: 26.
  */
  buy_order: string;
  /**
   Código de autorización de la transacción que se requiere capturar Largo máximo: 6.
  */
  authorization_code: string;
  /**
   Monto que se desea capturar. Largo máximo: 17.
  */
  capture_amount: number;
}
export interface WPCaptureOutModel {
  /**
   Token de la transacción. Largo máximo: 64
   */
  token: string;
  /**
   Código de autorización de la captura diferida. Largo máximo: 6
   */
  authorization_code: string;
  /**
   Fecha y hora de la autorización.
   */
  authorization_date: string;
  /**
   Monto capturado. Largo máximo: 6
   */
  captured_amount: number;
  /**
   Código de resultado de la captura. Si es exitoso es 0,de lo contrario la captura no fue realizada. Largo máximo: 2
   */
  response_code: number;
}
export enum codeErrorCapture {
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
  /** Transacción capturada previamente */
  'C_309' = '309',
  /** Monto a anular excede el saldo disponible para anular */
  'C_311' = '311',
  /** Error del autorizador */
  'C_315' = '315',
}