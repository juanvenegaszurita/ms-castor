import { Router } from 'express';
import { ProjectsController } from '../../controllers/v1/projects.controller';

export class ProjectsRouter {
  private static router: Router = Router();
  private static projectsController: ProjectsController = new ProjectsController();

  public static getRouter() {
    this.router.get('/', this.projectsController.getAllProject);
    this.router.get('/:id', this.projectsController.getProject);
    this.router.put('/', this.projectsController.updateProject);
    this.router.delete('/:id', this.projectsController.deleteProject);
    this.router.post('/', this.projectsController.createProject);

    return this.router;
  }
}