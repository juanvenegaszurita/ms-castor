import { Router } from 'express';

export class UsersRouter {
  private static router: Router = Router();

  public static getRouter() {
    this.router.get('/', (req, res) => res.send('Usuarios'));
    return this.router;
  }
}