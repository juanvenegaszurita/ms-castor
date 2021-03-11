import { Router } from 'express';
import { EnterprisesRouter } from './enterprises.router';
import { UsersRouter } from './users.router';
import { TasksRouter } from './tasks.router';
import { ProjectsRouter } from './projects.router';
import { StatustaskRouter } from './status-task.router';
import { ActionsRouter } from './actions.router';
import { ReportRouter } from './report.router';

export class RouterV1 {
  private static router: Router = Router();

  public static v1() {
    this.router.use('/users', UsersRouter.getRouter());
    this.router.use('/enterprises', EnterprisesRouter.getRouter());
    this.router.use('/task', TasksRouter.getRouter());
    this.router.use('/projects', ProjectsRouter.getRouter());
    this.router.use('/statusTask', StatustaskRouter.getRouter());
    this.router.use('/actions', ActionsRouter.getRouter());
    this.router.use('/report', ReportRouter.getRouter());
    return this.router;
  }
}