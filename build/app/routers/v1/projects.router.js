"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsRouter = void 0;
const express_1 = require("express");
const projects_controller_1 = require("../../controllers/v1/projects.controller");
class ProjectsRouter {
    static getRouter() {
        this.router.get('/', this.projectsController.getAllProject);
        this.router.get('/:id', this.projectsController.getProject);
        this.router.put('/', this.projectsController.updateProject);
        this.router.delete('/:id', this.projectsController.deleteProject);
        this.router.post('/', this.projectsController.createProject);
        return this.router;
    }
}
exports.ProjectsRouter = ProjectsRouter;
ProjectsRouter.router = express_1.Router();
ProjectsRouter.projectsController = new projects_controller_1.ProjectsController();
