import { Router } from 'express';
import { EnterprisesRouter } from './enterprises.router';
import { UsersRouter } from './users.router';
import { TasksRouter } from './tasks.router';
import { ProjectsRouter } from './projects.router';
import { StatustaskRouter } from './status-task.router';

export class RouterV1 {
  private static router: Router = Router();

  public static v1() {
    this.router.use('/users', UsersRouter.getRouter());
    this.router.use('/enterprises', EnterprisesRouter.getRouter());
    this.router.use('/task', TasksRouter.getRouter());
    this.router.use('/projects', ProjectsRouter.getRouter());
    this.router.use('/statusTask', StatustaskRouter.getRouter());
    return this.router;
  }
}