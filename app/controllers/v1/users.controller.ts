import { Request, Response } from 'express';
import { UsersModel } from '../../@models/users.model';
import { UsersModule } from '../../modules/v1/users.module';
import { HeadersModel } from '../../@models/headers.model';

export class UsersController {
  public async getAllUsers( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().getAllUsers(headers.idEnterprise, headers.UID) );
  }
  public async getUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsers(id) );
  }
  public async updateUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().updateUsers(user, headers.idEnterprise) );
  }
  public async updateOnlyUser( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    const user: UsersModel = req.body;
    res.json( await new UsersModule().updateOnlyUser(user, headers.UID) );
  }
  public async updateStatusUsers( req: Request, res: Response) {
    const dataStatus: {UID: string, status: boolean} = req.body;
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().updateStatusUsers(dataStatus, headers.idEnterprise) );
  }
  public async deleteUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().deleteUsers(id) );
  }
  public async createUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().createUsers(user, headers.idEnterprise) );
  }
  public async createExistingUser( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().createExistingUser(user, headers.idEnterprise) );
  }
  public async getUsersEnterprise( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsersEnterprise(id) );
  }
  public async getAllUsersSelect( req: Request, res: Response) {
    const headers = res.locals as HeadersModel;
    res.json( await new UsersModule().getAllUsersSelect(headers.idEnterprise) );
  }
}