"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRouter = void 0;
const express_1 = require("express");
const tasks_controller_1 = require("../../controllers/v1/tasks.controller");
class TasksRouter {
    static getRouter() {
        this.router.get('/', this.tasksController.getAllTask);
        this.router.get('/:id', this.tasksController.getTask);
        this.router.put('/', this.tasksController.updateTask);
        this.router.delete('/:id', this.tasksController.deleteTask);
        this.router.post('/', this.tasksController.createTask);
        this.router.get('/group/status', this.tasksController.statusTasks);
        return this.router;
    }
}
exports.TasksRouter = TasksRouter;
TasksRouter.router = express_1.Router();
TasksRouter.tasksController = new tasks_controller_1.TasksController();
