import { ProjectsModels } from '../../@models/projects.model'
import { ReturnServiceMS } from '../../@models/return-service.model'
const projects: ProjectsModels[] = [
  {
    idProject: '1',
    idEnterprise: 1,
    title: "Projecto 1",
    subtitle: "Subtitulo Projecto 1",
    descriptions: "Esta es la descripción del Proyecto 1",
  },
  {
    idProject: '2',
    idEnterprise: 1,
    title: "Projecto 2",
    subtitle: "Subtitulo Projecto 2",
    descriptions: "Esta es la descripción del Proyecto 2",
  },
  {
    idProject: '3',
    idEnterprise: 1,
    title: "Projecto 3",
    subtitle: "Subtitulo Projecto 3",
    descriptions: "Esta es la descripción del Proyecto 3",
  }
];
export class ProjectsModule {
  public async getAllProject( ): Promise<ReturnServiceMS<ProjectsModels[]>> {
    return { payload: projects, message: '', code: "200"};
  }
  public async getProject( id: string ): Promise<ReturnServiceMS<ProjectsModels | undefined>> {
    const projectFind: ProjectsModels | undefined = projects.find( value => value.idProject === id );
    return { payload: projectFind, message: '', code: "200"};
  }
  public async updateProject( project: ProjectsModels ) {
    projects.forEach((value, index) => {
      if (value.idProject === project.idProject) {
        projects[index] = project;
      }
    });
    return { payload: project, message: '', code: "200"};
  }
  public async deleteProject( id: string ) {
    projects.forEach((value, index) => {
      if (value.idProject === id) projects.splice(index, 1);
    });
    return { payload: {}, message: "Eliminado", code: "200" };
  }
  public async createProject( project: ProjectsModels ) {
    project.idProject = ""+(Math.max.apply(Math, projects.map(function(o) { return parseInt(o.idProject) ? parseInt(o.idProject) : 0; }))+1);
    projects.push(project)
    return { payload: project, message: '', code: "200"};
  }
}