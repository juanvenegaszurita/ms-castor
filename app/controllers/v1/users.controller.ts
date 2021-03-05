import { Request, Response } from 'express';
import { UsersModel } from '../../@models/users.model';
import { UsersModule } from '../../modules/v1/users.module';

export class UsersController {
  public async getAllUsers( req: Request, res: Response) {
    const UID: string = `${req.headers.uid}`;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().getAllUsers(identerprise, UID) );
  }
  public async getUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsers(id) );
  }
  public async updateUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().updateUsers(user, identerprise) );
  }
  public async updateStatusUsers( req: Request, res: Response) {
    const dataStatus: {UID: string, status: boolean} = req.body;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().updateStatusUsers(dataStatus, identerprise) );
  }
  public async deleteUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().deleteUsers(id) );
  }
  public async createUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().createUsers(user, identerprise) );
  }
  public async createExistingUser( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().createExistingUser(user, identerprise) );
  }
  public async getUsersEnterprise( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsersEnterprise(id) );
  }
  public async getAllUsersSelect( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new UsersModule().getAllUsersSelect(identerprise) );
  }
}