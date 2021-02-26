import { Router } from 'express';
import { UsersController } from '../../controllers/v1/users.controller';

export class UsersRouter {
  private static router: Router = Router();
  private static usersController: UsersController = new UsersController();

  public static getRouter() {
    this.router.get('/', this.usersController.getAllUsers);
    this.router.get('/:id', this.usersController.getUsers);
    this.router.put('/', this.usersController.updateUsers);
    this.router.delete('/:id', this.usersController.deleteUsers);
    this.router.post('/', this.usersController.createUsers);
    
    this.router.get('/group/enterprise/:id', this.usersController.getUsersEnterprise);

    return this.router;
  }
}