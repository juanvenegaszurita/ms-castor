"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnterprisesRouter = void 0;
const express_1 = require("express");
const enterprises_controller_1 = require("../../controllers/v1/enterprises.controller");
class EnterprisesRouter {
    static getRouter() {
        this.router.get('/', this.enterprisesController.getAllEnterprise);
        this.router.get('/:id', this.enterprisesController.getEnterprise);
        this.router.put('/', this.enterprisesController.updateEnterprise);
        this.router.delete('/:id', this.enterprisesController.deleteEnterprise);
        this.router.post('/', this.enterprisesController.createEnterprise);
        return this.router;
    }
}
exports.EnterprisesRouter = EnterprisesRouter;
EnterprisesRouter.router = express_1.Router();
EnterprisesRouter.enterprisesController = new enterprises_controller_1.EnterprisesController();
