import { Router } from 'express';
import { TasksController } from '../../controllers/v1/tasks.controller';

export class TasksRouter {
  private static router: Router = Router();
  private static tasksController: TasksController = new TasksController();

  public static getRouter() {
    this.router.get('/', this.tasksController.getAllTask);
    this.router.get('/:id', this.tasksController.getTask);
    this.router.put('/', this.tasksController.updateTask);
    this.router.delete('/:id', this.tasksController.deleteTask);
    this.router.post('/', this.tasksController.createTask);
    
    this.router.get('/statusTasks/:idProject', this.tasksController.statusTasks);

    return this.router;
  }
}