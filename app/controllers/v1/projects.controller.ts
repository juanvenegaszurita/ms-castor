import { Request, Response } from 'express';
import { ProjectsModels } from '../../@models/projects.model';
import { ProjectsModule } from '../../modules/v1/projects.module';

export class ProjectsController {
  public async getAllProject( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    res.json( await new ProjectsModule().getAllProject(identerprise) );
  }
  public async getProject( req: Request, res: Response) {
    const identerprise: number = parseInt(req.headers.identerprise+'');
    const id: number = parseInt(req.params.id);
    res.json( await new ProjectsModule().getProject(identerprise, id) );
  }
  public async updateProject( req: Request, res: Response) {
    const project: ProjectsModels = req.body;
    res.json( await new ProjectsModule().updateProject(project) );
  }
  public async deleteProject( req: Request, res: Response) {
    const id: number = parseInt(req.params.id);
    res.json( await new ProjectsModule().deleteProject(id) );
  }
  public async createProject( req: Request, res: Response) {
    const project: ProjectsModels = req.body;
    res.json( await new ProjectsModule().createProject(project) );
  }
}