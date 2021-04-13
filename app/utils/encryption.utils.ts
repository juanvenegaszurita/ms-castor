export class EncryptionUtils {
  static decrypt(data: ObjectFinalData | string, type: TypeData): string | Object {
    let dataFinal: string | Object = "";
    if (type === TypeData.OBJECT) {
      const convertData = data as ObjectFinalData;
      dataFinal = JSON.parse(atob(convertData.data));
    } else if (type === TypeData.STRING) {
      const convertData = data as string;
      dataFinal = atob(convertData);
    }
    return dataFinal;
  }
  static encrypt(data: Object | string, type: TypeData): string | ObjectFinalData {
    let dataFinal: string | ObjectFinalData = "";
    if (type === TypeData.OBJECT) {
      const convertData = data as Object;
      dataFinal = {
        data: btoa(JSON.stringify(convertData))
      };
    } else if (type === TypeData.STRING) {
      const convertData = data as string;
      dataFinal = btoa(convertData);
    }
    return dataFinal;
  }
}

export enum TypeData {
  "OBJECT",
  "STRING"
};
export interface ObjectFinalData {
  data: string;
}