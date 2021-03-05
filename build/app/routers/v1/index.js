"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterV1 = void 0;
const express_1 = require("express");
const enterprises_router_1 = require("./enterprises.router");
const users_router_1 = require("./users.router");
const tasks_router_1 = require("./tasks.router");
const projects_router_1 = require("./projects.router");
const status_task_router_1 = require("./status-task.router");
const actions_router_1 = require("./actions.router");
class RouterV1 {
    static v1() {
        this.router.use('/users', users_router_1.UsersRouter.getRouter());
        this.router.use('/enterprises', enterprises_router_1.EnterprisesRouter.getRouter());
        this.router.use('/task', tasks_router_1.TasksRouter.getRouter());
        this.router.use('/projects', projects_router_1.ProjectsRouter.getRouter());
        this.router.use('/statusTask', status_task_router_1.StatustaskRouter.getRouter());
        this.router.use('/actions', actions_router_1.ActionsRouter.getRouter());
        return this.router;
    }
}
exports.RouterV1 = RouterV1;
RouterV1.router = express_1.Router();
