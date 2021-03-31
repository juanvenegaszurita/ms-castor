import { ReturnServiceMS } from "../../@models/return-service.model";
import { UserEnterprisesModel } from "../../@models/user-enterprises.model";
import { UsersModel } from "../../@models/users.model";
import { UserEnterprise } from "../../bd/user-enterprise.bd";
import { User } from "../../bd/user.bd";

export class UsersModule {  
  public async getAllUsers( identerprise: number, UIDNotIn: string ): Promise<ReturnServiceMS<User[]>> {
    const user = await User.getAllUsers(identerprise, UIDNotIn);
    return { payload: user, message: "", code: "200" };
  }
  public async getUsers( id: string ): Promise<ReturnServiceMS<User | null>> {
    const user = await User.findByPk(id);
    return { payload: user, message: "", code: "200" };
  }
  public async updateUsers(user: UsersModel, idEnterprise: number): Promise<ReturnServiceMS<UsersModel | User | null>> {
    const userenterprises = (user?.userenterprises && user.userenterprises.length > 0) ? user.userenterprises[0]: {};
    const userUpdate = await User.update( user, {where: { UID: user.UID }} );
    const userEnterprise = await UserEnterprise.update( userenterprises, { where: { UID: user.UID, idEnterprise } } );

    if( userUpdate.length > 0 && userEnterprise.length > 0 ) {
      const finalUser = await User.getFullUser(idEnterprise, user.UID);
      return { payload: finalUser, message: '', code: "200"};
    } else
      return { payload: user, message: 'Error al actualziar', code: "200"};
  }
  public async updateOnlyUser(user: UsersModel, UID: string): Promise<ReturnServiceMS<UsersModel>> {
    const userUpdate = await User.update( user, {where: { UID }} );
    if( userUpdate.length > 0 ) {
      return { payload: user, message: '', code: "200"};
    } else {
      return { payload: user, message: 'Error al actualziar', code: "200"};
    }
  }
  public async updateStatusUsers(data: {UID: string, status: boolean}, idEnterprise: number): Promise<ReturnServiceMS<{UID: string, status: boolean}>> {
    const userEnterprise = await UserEnterprise.update( { status: data.status }, { where: { UID: data.UID, idEnterprise } } );
    
    if( userEnterprise.length > 0 )
      return { payload: data, message: '', code: "200"};
    else
      return { payload: data, message: 'Error al actualziar', code: "200"};
  }
  public async deleteUsers( id: string ): Promise<ReturnServiceMS<{}>> {
    const userDelete = await User.destroy( {where: { UID: id }} );
    if( userDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createUsers(user: UsersModel, idEnterprise: number): Promise<ReturnServiceMS<User | null>> {
    const userenterprises : UserEnterprisesModel | null = (user?.userenterprises && user.userenterprises.length > 0) ? user.userenterprises[0]: null;
    const userCreate = await User.create( user );
    const userEnterprise = await UserEnterprise.create( { idEnterprise, UID: user.UID, isAdmin: userenterprises?.isAdmin, cargo: userenterprises?.cargo, status: userenterprises?.status, boss: userenterprises?.boss } );
    
    const finalUser = await User.getFullUser(idEnterprise, user.UID);

    return { payload: finalUser, message: "", code: "200" };
  }
  public async createExistingUser(user: UsersModel, idEnterprise: number): Promise<ReturnServiceMS<User | null>> {
    const userenterprises : UserEnterprisesModel | null = (user?.userenterprises && user.userenterprises.length > 0) ? user.userenterprises[0]: null;
    const existingUser = await User.findOne({ where: {email: user.email} });
    if( existingUser ) {
      user.UID = existingUser.getDataValue("UID");
      const userEnterprise = await UserEnterprise.create( { idEnterprise, UID: user.UID, isAdmin: userenterprises?.isAdmin, cargo: userenterprises?.cargo, status: true } );
      existingUser.setDataValue("userenterprises", [userEnterprise]);
      return { payload: existingUser, message: "", code: "200" };
    } else {
      return { payload: null, message: "Usuario no existe", code: "400" };
    }
  }
  public async getUsersEnterprise( id: string ): Promise<ReturnServiceMS<User | null>> {
    const user = await User.getUsersEnterprise(id);
    return { payload: user, message: "", code: "200" };
  }
  public async getAllUsersSelect( identerprise: number ): Promise<ReturnServiceMS<User[]>> {
    const user = await User.getAllUsers(identerprise);
    return { payload: user, message: "", code: "200" };
  }
}