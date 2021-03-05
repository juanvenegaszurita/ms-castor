"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const projects_bd_1 = require("../../bd/projects.bd");
class ProjectsModule {
    getAllProject(idEnterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const projects = yield projects_bd_1.Project.getProjectCountTasks(idEnterprise);
            return { payload: projects, message: '', code: "200" };
        });
    }
    getProject(idEnterprise, idProject) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = yield projects_bd_1.Project.getProjectCountTasks(idEnterprise, { idProject });
            const projectFinal = (project.length > 0) ? project[0] : null;
            return { payload: projectFinal, message: '', code: "200" };
        });
    }
    updateProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const finalProject = {
                idProject: project.idProject,
                title: project.title,
                subtitle: project.subtitle,
                descriptions: project.descriptions,
                avatar: project.avatar,
                idEnterprise: project.idEnterprise,
            };
            const projectUpdate = yield projects_bd_1.Project.update(finalProject, { where: { idProject: project.idProject } });
            if (projectUpdate.length > 0)
                return { payload: finalProject, message: '', code: "200" };
            else
                return { payload: finalProject, message: 'Error al actualziar', code: "200" };
        });
    }
    deleteProject(idProject) {
        return __awaiter(this, void 0, void 0, function* () {
            const projectDelete = yield projects_bd_1.Project.destroy({ where: { idProject } });
            if (projectDelete > 0)
                return { payload: {}, message: '', code: "200" };
            else
                return { payload: {}, message: 'Error al Eliminar', code: "200" };
        });
    }
    createProject(project) {
        return __awaiter(this, void 0, void 0, function* () {
            const finalProject = {
                title: project.title,
                subtitle: project.subtitle,
                descriptions: project.descriptions,
                avatar: project.avatar,
                idEnterprise: project.idEnterprise,
            };
            try {
                const projectCreate = yield projects_bd_1.Project.create(finalProject, { fields: [`title`, `subtitle`, `descriptions`, `avatar`, `idEnterprise`] });
                return { payload: projectCreate, message: '', code: "200" };
            }
            catch (error) {
                return { payload: null, message: '', code: "200" };
            }
        });
    }
}
exports.ProjectsModule = ProjectsModule;
