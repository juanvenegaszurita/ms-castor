import { AES, enc } from 'crypto-js';

export class EncryptionUtils {
  private static SECRET_KEY_AES: string = "chupalowedfghjkjhgfsdbnmkjhgfdsfghjkhgfdfghj";

  static decrypt(data: ObjectFinalData | string, type: TypeData): string | Object {
    let dataFinal: string | Object = "";
    if (type === TypeData.OBJECT) {
      const convertData = data as ObjectFinalData;
      dataFinal = JSON.parse(this.AESdecrypt(convertData.data));
    } else if (type === TypeData.STRING) {
      const convertData = data as string;
      dataFinal = this.AESdecrypt(convertData);
    }
    return dataFinal;
  }
  static encrypt(data: Object | string, type: TypeData): string | ObjectFinalData {
    let dataFinal: string | ObjectFinalData = "";
    if (type === TypeData.OBJECT) {
      const convertData = data as Object;
      dataFinal = {
        data: this.AESencrypt(JSON.stringify(convertData))
      };
    } else if (type === TypeData.STRING) {
      const convertData = data as string;
      dataFinal = this.AESencrypt(convertData);
    }
    return dataFinal;
  }
  private static AESencrypt(data: any): string {
    return AES.encrypt(`${data}`, this.SECRET_KEY_AES).toString().replace(/\+/g, 'xMl3Jk').replace(/\//g, 'Por21Ld').replace(/=/g, 'Ml32');
  }
  private static AESdecrypt(data: any) {
    const encrypted = data.toString().replace(/xMl3Jk/g, '+' ).replace(/Por21Ld/g, '/').replace(/Ml32/g, '=');
    return AES.decrypt(`${encrypted}`, this.SECRET_KEY_AES).toString(enc.Utf8);
  }
}

export enum TypeData {
  "OBJECT",
  "STRING"
};
export interface ObjectFinalData {
  data: string;
}