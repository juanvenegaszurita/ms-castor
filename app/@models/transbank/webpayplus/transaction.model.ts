export interface WPTransactionModel {
  /**
   Resultado de la autenticación del tarjetahabiente. Puede tomar el valor 
   TSY (Autenticación exitosa),
   TSN (Autenticación fallida),
   TO (Tiempo máximo excedido para autenticación),
   ABO (Autenticación abortada por tarjetahabiente),
   U3 (Error interno en la autenticación),
   NP (No Participa, probablemente por ser una tarjeta extranjera que no participa en el programa 3DSecure),
   ACS2 (Autenticación fallida extranjera).
   Puede ser vacío si la transacción no se autenticó.
   Largo máximo: 3.
   Este campo es información adicional suplementaria al responseCode pero el comercio no debe validar este campo.
   Porque constantemente se agregan nuevos mecanismos de autenticación que se traducen en nuevos valores para este campo que no están necesariamente documentados.
   (En el caso de tarjetas internacionales que no proveen 3D-Secure, la decisión del comercio de aceptarlas o no se realiza a nivel de configuración del comercio en Transbank y debe ser conversada con el ejecutivo del comercio)
   */
   vci: string;
   /**
    Formato número entero para transacciones en peso y decimal para transacciones en dólares. Largo máximo: 17
    */
   amount: number;
   /**
    Estado de la transacción (INITIALIZED, AUTHORIZED, REVERSED, FAILED, NULLIFIED, PARTIALLY_NULLIFIED, CAPTURED). Largo máximo: 64
    */
   status: string;
   /**
    Orden de compra de la tienda indicado en Transaction.create(). Largo máximo: 26
    */
   buy_order: string;
   /**
    Identificador de sesión, el mismo enviado originalmente por el comercio en Transaction.create(). Largo máximo: 61.
    */
   session_id: string;
   /**
    4 últimos números de la tarjeta de crédito del tarjetahabiente. Solo para comercios autorizados por Transbank se envía el número completo. Largo máximo: 19.
    */
   card_detail: {
     card_number: string;
   };
   /**
    Fecha de la autorización. Largo: 4, formato MMDD
    */
   accounting_date: string;
   /**
    Fecha y hora de la autorización. Largo: 6, formato: MMDDHHmm
    */
   transaction_date: string;
   /**
    Código de autorización de la transacción Largo máximo: 6
    */
   authorization_code: string;
   /**
    Tipo de pago de la transacción.
    VD = Venta Débito.
    VN = Venta Normal.
    VC = Venta en cuotas.
    SI = 3 cuotas sin interés.
    S2 = 2 cuotas sin interés.
    NC = N Cuotas sin interés.
    VP = Venta Prepago.
    */
   payment_type_code: AuthorizationCodeType;
   /**
    Código de respuesta de la autorización. Valores posibles:
    0 = Transacción aprobada
    Puedes revisar los códigos de respuesta de rechazo en el siguiente link
    */
   response_code: number;
   /**
    Monto de las cuotas. Largo máximo: 17
    */
   installments_amount: number;
   /**
    Cantidad de cuotas. Largo máximo: 2
    */
   installments_number: number;
   /**
    Monto restante para un detalle anulado. Largo máximo: 17
    */
   balance: number;
}
export enum AuthorizationCodeType {
  /** Venta Débito. */
  'VD' = 'VD',
  /** Venta Normal. */
  'VN' = 'VN',
  /** Venta en cuotas. */
  'VC' = 'VC',
  /** 3 cuotas sin interés. */
  'SI' = 'SI',
  /** 2 cuotas sin interés. */
  'S2' = 'S2',
  /** N Cuotas sin interés. */
  'NC' = 'NC',
  /** Venta Prepago. */
  'VP' = 'VP'
}
export enum StatusTransactions {
  "INITIALIZED" = "INITIALIZED",
  "AUTHORIZED" = "AUTHORIZED",
  "REVERSED" = "REVERSED",
  "FAILED" = "FAILED",
  "NULLIFIED" = "NULLIFIED",
  "PARTIALLY_NULLIFIED" = "PARTIALLY_NULLIFIED",
  "CAPTURED" = "CAPTURED"
}
export enum VciTransactions {
  "TSY" = "TSY",
  "TSN" = "TSN",
  "TO" = "TO",
  "ABO" = "ABO",
  "U3" = "U3",
  "NP" = "NP",
  "ACS2" = "ACS2",
}