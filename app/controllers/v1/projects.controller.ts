import { Request, Response } from 'express';
import { ProjectsModule } from '../../modules/v1/projects.module';

export class ProjectsController {
  public async getAllProject( req: Request, res: Response) {
    res.json( await new ProjectsModule().getAllProject() );
  }
  public async getProject( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new ProjectsModule().getProject(id) );
  }
  public async updateProject( req: Request, res: Response) {
    res.json( await new ProjectsModule().updateProject() );
  }
  public async deleteProject( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new ProjectsModule().deleteProject(id) );
  }
  public async createProject( req: Request, res: Response) {
    res.json( await new ProjectsModule().createProject() );
  }
}