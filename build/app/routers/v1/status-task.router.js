"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatustaskRouter = void 0;
const express_1 = require("express");
const status_task_controller_1 = require("../../controllers/v1/status-task.controller");
class StatustaskRouter {
    static getRouter() {
        this.router.get('/', this.statustaskController.getAllStatustask);
        this.router.get('/:id', this.statustaskController.getStatustask);
        this.router.put('/', this.statustaskController.updateStatustask);
        this.router.delete('/:id', this.statustaskController.deleteStatustask);
        this.router.post('/', this.statustaskController.createStatustask);
        return this.router;
    }
}
exports.StatustaskRouter = StatustaskRouter;
StatustaskRouter.router = express_1.Router();
StatustaskRouter.statustaskController = new status_task_controller_1.StatustaskController();
