import { ReturnServiceMS } from "../../@models/return-service.model";
import { UsersModel } from "../../@models/users.model";
import { enterprises } from "./enterprises.module";
import { User } from "../../bd/user.bd";

export const users: UsersModel[] = [
    {
      UID: "0Ffuewdnk3fKpsiXO2lOO3s1KdH2",
      email: "juan.venegas@siigroup.cl",
      idEnterprise: 1,
      cargo: "Jefe",
      enterprise: [],
      nombre: "Juan Venegas",
    }
]
export class UsersModule {
  public async getAllUsers( ): Promise<ReturnServiceMS<User[]>> {
    const user = await User.findAll();
    return { payload: user, message: "", code: "200" };
  }
  public async getUsers( id: string ): Promise<ReturnServiceMS<User | null>> {
    const user = await User.findByPk(id);
    return { payload: user, message: "", code: "200" };
  }
  public async updateUsers(user: UsersModel): Promise<ReturnServiceMS<UsersModel>> {
    const userUpdate = await User.update( user, {where: { UID: user.UID }} );
    if( userUpdate.length > 0 )
      return { payload: user, message: '', code: "200"};
    else
      return { payload: user, message: 'Error al actualziar', code: "200"};
  }
  public async deleteUsers( id: string ): Promise<ReturnServiceMS<{}>> {
    const userDelete = await User.destroy( {where: { UID: id }} );
    if( userDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createUsers(user: UsersModel) {
    const userCreate = await User.create( user );
    return { payload: userCreate, message: "", code: "200" };
  }
  public async getUsersEnterprise( id: string ): Promise<ReturnServiceMS<UsersModel | undefined>> {
    const user: UsersModel | undefined = users.find((value) => value.UID === id);
    if( user ) {
      user.enterprise = enterprises.filter( ent => ent.idEnterprise === user.idEnterprise );
    }
    return { payload: user, message: "", code: "200" };
  }
}