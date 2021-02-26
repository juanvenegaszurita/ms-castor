import { EnterprisesModel } from "../../@models/enterprises.model";

export const enterprises: EnterprisesModel[] = [
    {
      idEnterprise: 1,
      nombre: "Empresa S.A.",
      descripcion: "La mejor empresa"
    }
]
export class EnterprisesModule {
  public async getAllEnterprise( ) {
    return { payload: 'Enterprises getAllEmpresa', message: '', code: 200};
  }
  public async getEnterprise( id: number ) {
    return { payload: 'Enterprises getEmpresa'+id, message: '', code: 200};
  }
  public async updateEnterprise( ) {
    return { payload: 'Enterprises updateEmpresa', message: '', code: 200};
  }
  public async deleteEnterprise( id: number ) {
    return { payload: 'Enterprises deleteEmpresa'+id, message: '', code: 200};
  }
  public async createEnterprise( ) {
    return { payload: 'Enterprises createEmpresa', message: '', code: 200};
  }
}