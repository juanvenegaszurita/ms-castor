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
exports.ProjectsController = void 0;
const projects_module_1 = require("../../modules/v1/projects.module");
class ProjectsController {
    getAllProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new projects_module_1.ProjectsModule().getAllProject(identerprise));
        });
    }
    getProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            const id = parseInt(req.params.id);
            res.json(yield new projects_module_1.ProjectsModule().getProject(identerprise, id));
        });
    }
    updateProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = req.body;
            res.json(yield new projects_module_1.ProjectsModule().updateProject(project));
        });
    }
    deleteProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new projects_module_1.ProjectsModule().deleteProject(id));
        });
    }
    createProject(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const project = req.body;
            res.json(yield new projects_module_1.ProjectsModule().createProject(project));
        });
    }
}
exports.ProjectsController = ProjectsController;
