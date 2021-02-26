import { Router } from 'express';
import { ActionsController } from '../../controllers/v1/actions.controller';

export class ActionsRouter {
  private static router: Router = Router();
  private static actionsController: ActionsController = new ActionsController();

  public static getRouter() {
    this.router.get('/', this.actionsController.getAllActions);
    this.router.get('/:id', this.actionsController.getActions);
    this.router.put('/', this.actionsController.updateActions);
    this.router.delete('/:id', this.actionsController.deleteActions);
    this.router.post('/', this.actionsController.createActions);
    
    return this.router;
  }
}