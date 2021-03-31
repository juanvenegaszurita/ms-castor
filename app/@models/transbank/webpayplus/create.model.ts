export interface WPCreateInModel {
  /**
   Orden de compra de la tienda. Este número debe ser único para cada transacción. Largo máximo: 26. La orden de compra puede tener: Números, letras, mayúsculas y minúsculas, y los signos |_=&%.,~:/?[+!@()>-
   */
  buy_order: string;
  /**
   Identificador de sesión, uso interno de comercio, este valor es devuelto al final de la transacción. Largo máximo: 61
   */
  session_id: string;
  /**
   Monto de la transacción. Máximo 2 decimales para USD. Largo máximo: 17
   */
  amount: number;
  /**
   URL del comercio, a la cual Webpay redireccionará posterior al proceso de autorización. Largo máximo: 256
   */
  return_url: string;
  /**
   Año: se agrega para complemento de información
   */
  anio?: number;
  /**
   Mes: se agrega para complemento de información
   */
  mes?: number;
  /**
   id empresa: se agrega para complemento de información
   */
  idEnterprise?: number;
  /**
   id empresa Plan: se agrega para complemento de información
   */
  idEnterprisesPlans?: number;
}
export interface WPCreateOutModel {
  /**
   Token de la transacción. Largo: 64.
   */
  token: string,
  /**
   URL de formulario de pago Webpay. Largo máximo: 255.
   */
  url: string
 }