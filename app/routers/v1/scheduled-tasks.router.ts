import { Router } from 'express';
import { ScheduledTasksController } from '../../controllers/v1/scheduled-tasks.controller';

export class ScheduledTasksRouter {
  private static router: Router = Router();
  private static scheduledTasksController: ScheduledTasksController = new ScheduledTasksController();

  public static getRouter() {
    this.router.get('/birthdays/:status', this.scheduledTasksController.birthdays);
    this.router.get('/validate/:cronExpression', this.scheduledTasksController.validate);

    return this.router;
  }
}