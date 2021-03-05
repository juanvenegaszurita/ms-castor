"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsRouter = void 0;
const express_1 = require("express");
const actions_controller_1 = require("../../controllers/v1/actions.controller");
class ActionsRouter {
    static getRouter() {
        this.router.get('/', this.actionsController.getAllActions);
        this.router.get('/:id', this.actionsController.getActions);
        this.router.put('/', this.actionsController.updateActions);
        this.router.delete('/:id/:idTask', this.actionsController.deleteActions);
        this.router.post('/', this.actionsController.createActions);
        return this.router;
    }
}
exports.ActionsRouter = ActionsRouter;
ActionsRouter.router = express_1.Router();
ActionsRouter.actionsController = new actions_controller_1.ActionsController();
