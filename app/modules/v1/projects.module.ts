import { ProjectsModels } from '../../@models/projects.model'
import { ReturnServiceMS } from '../../@models/return-service.model'
import { Project } from '../../bd/projects.bd';

export class ProjectsModule {
  public async getAllProject( idEnterprise: number ): Promise<ReturnServiceMS<Project[]>> {
    const projects = await Project.getProjectCountTasks(idEnterprise);
    return { payload: projects, message: '', code: "200"};
  }
  public async getProject( idEnterprise: number, idProject: number ): Promise<ReturnServiceMS<Project | null>> {
    const project = await Project.getProjectCountTasks(idEnterprise, {idProject});
    const projectFinal = ( project.length > 0 )? project[0] : null;
    return { payload: projectFinal, message: '', code: "200"};
  }
  public async updateProject( project: ProjectsModels ): Promise<ReturnServiceMS<ProjectsModels>> {
    const finalProject: ProjectsModels = {
      idProject: project.idProject,
      title: project.title,
      subtitle: project.subtitle,
      descriptions: project.descriptions,
      avatar: project.avatar,
      idEnterprise: project.idEnterprise,
    }

    const projectUpdate = await Project.update( finalProject, {where: { idProject: project.idProject }} );
    if( projectUpdate.length > 0 )
      return { payload: finalProject, message: '', code: "200"};
    else
      return { payload: finalProject, message: 'Error al actualziar', code: "200"};
  }
  public async deleteProject( idProject: number ): Promise<ReturnServiceMS<{}>> {
    const projectDelete = await Project.destroy( {where: { idProject }} );
    if( projectDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createProject( project: ProjectsModels ): Promise<ReturnServiceMS<Project | null>> {
    const finalProject: ProjectsModels = {
      title: project.title,
      subtitle: project.subtitle,
      descriptions: project.descriptions,
      avatar: project.avatar,
      idEnterprise: project.idEnterprise,
    }
    try {
      const projectCreate = await Project.create( finalProject, { fields: [`title`,`subtitle`,`descriptions`,`avatar`,`idEnterprise`]} );
      return { payload: projectCreate, message: '', code: "200"};
    } catch (error) {
      return { payload: null, message: '', code: "200"};
    }
  }
}