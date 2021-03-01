import { ReturnServiceMS } from "../../@models/return-service.model";
import { UsersModel } from "../../@models/users.model";
import { UserEnterprise } from "../../bd/user-enterprise.bd";
import { User } from "../../bd/user.bd";

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
  public async createUsers(user: UsersModel, idEnterprise: number): Promise<ReturnServiceMS<User>> {
    const userCreate = await User.create( user );
    const userEnterprise = await UserEnterprise.create( { idEnterprise, UID: user.UID } )
    return { payload: userCreate, message: "", code: "200" };
  }
  public async getUsersEnterprise( id: string ): Promise<ReturnServiceMS<User | null>> {
    const user = await User.getUsersEnterprise(id);
    return { payload: user, message: "", code: "200" };
  }
}