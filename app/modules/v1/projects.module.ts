import { ProjectsModels } from '../../@models/projects-models'
import { ReturnServiceMS } from '../../@models/return-service.model'
const projects: ProjectsModels[] = [
  {
    idProject: 1,
    title: "Projecto 1",
    subtitle: "Subtitulo Projecto 1",
    descriptions: "Esta es la descripción del Proyecto 1",
  },
  {
    idProject: 2,
    title: "Projecto 2",
    subtitle: "Subtitulo Projecto 2",
    descriptions: "Esta es la descripción del Proyecto 2",
  },
  {
    idProject: 3,
    title: "Projecto 3",
    subtitle: "Subtitulo Projecto 3",
    descriptions: "Esta es la descripción del Proyecto 3",
  }
];
export class ProjectsModule {
  public async getAllProject( ): Promise<ReturnServiceMS<ProjectsModels[]>> {
    return { payload: projects, message: '', code: "200"};
  }
  public async getProject( id: number ): Promise<ReturnServiceMS<ProjectsModels | undefined>> {
    const projectFind: ProjectsModels | undefined = projects.find( value => value.idProject === id );
    return { payload: projectFind, message: '', code: "200"};
  }
  public async updateProject( ) {
    return { payload: 'Projects updateProject', message: '', code: "200"};
  }
  public async deleteProject( id: number ) {
    return { payload: 'Projects deleteProject'+id, message: '', code: "200"};
  }
  public async createProject( ) {
    return { payload: 'Projects createProject', message: '', code: "200"};
  }
}