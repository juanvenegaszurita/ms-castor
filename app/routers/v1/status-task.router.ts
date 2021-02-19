import { Router } from 'express';
import { StatustaskController } from '../../controllers/v1/status-task.controller';

export class StatustaskRouter {
  private static router: Router = Router();
  private static statustaskController: StatustaskController = new StatustaskController();

  public static getRouter() {
    this.router.get('/', this.statustaskController.getAllStatustask);
    this.router.get('/:id', this.statustaskController.getStatustask);
    this.router.put('/', this.statustaskController.updateStatustask);
    this.router.delete('/:id', this.statustaskController.deleteStatustask);
    this.router.post('/', this.statustaskController.createStatustask);

    return this.router;
  }
}