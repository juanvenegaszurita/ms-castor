import { Request, Response } from 'express';
import { UsersModel } from '../../@models/users.model';
import { UsersModule } from '../../modules/v1/users.module';

export class UsersController {
  public async getAllUsers( req: Request, res: Response) {
    res.json( await new UsersModule().getAllUsers() );
  }
  public async getUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsers(id) );
  }
  public async updateUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    res.json( await new UsersModule().updateUsers(user) );
  }
  public async deleteUsers( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().deleteUsers(id) );
  }
  public async createUsers( req: Request, res: Response) {
    const user: UsersModel = req.body;
    const identerprise: number = parseInt(req.headers.identerprise+'');
    console.log( "req.headers", req.headers )
    console.log( "req.headers.identerprise", req.headers.identerprise )
    console.log("identerprise", identerprise)
    res.json( await new UsersModule().createUsers(user, identerprise) );
  }
  public async getUsersEnterprise( req: Request, res: Response) {
    const id: string = req.params.id;
    res.json( await new UsersModule().getUsersEnterprise(id) );
  }
}