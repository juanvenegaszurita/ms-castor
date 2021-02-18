import { Router } from 'express';
import { EnterprisesController } from '../../controllers/v1/enterprises.controller';

export class EnterprisesRouter {
  private static router: Router = Router();
  private static enterprisesController: EnterprisesController = new EnterprisesController();

  public static getRouter() {
    this.router.get('/', this.enterprisesController.getAllEnterprise);
    this.router.get('/:id', this.enterprisesController.getEnterprise);
    this.router.put('/', this.enterprisesController.updateEnterprise);
    this.router.delete('/:id', this.enterprisesController.deleteEnterprise);
    this.router.post('/', this.enterprisesController.createEnterprise);
    
    return this.router;
  }
}