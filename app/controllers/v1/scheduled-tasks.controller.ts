import { Request, Response } from 'express';
import { ScheduledTasksModule } from '../../modules/v1/scheduled-tasks.module';

export class ScheduledTasksController {
  public async birthdays( req: Request, res: Response) {
    res.json( await new ScheduledTasksModule().birthdays(req.params.status) );
  }
  public async validate( req: Request, res: Response) {
    res.json( await new ScheduledTasksModule().validate(req.params.cronExpression) );
  }
}