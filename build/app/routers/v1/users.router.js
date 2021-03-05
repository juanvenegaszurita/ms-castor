"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = require("express");
const users_controller_1 = require("../../controllers/v1/users.controller");
class UsersRouter {
    static getRouter() {
        this.router.get('/', this.usersController.getAllUsers);
        this.router.get('/:id', this.usersController.getUsers);
        this.router.put('/', this.usersController.updateUsers);
        this.router.put('/status', this.usersController.updateStatusUsers);
        this.router.delete('/:id', this.usersController.deleteUsers);
        this.router.post('/', this.usersController.createUsers);
        this.router.post('/ExistingUser', this.usersController.createExistingUser);
        this.router.get('/group/enterprise/:id', this.usersController.getUsersEnterprise);
        this.router.get('/case/select', this.usersController.getAllUsersSelect);
        return this.router;
    }
}
exports.UsersRouter = UsersRouter;
UsersRouter.router = express_1.Router();
UsersRouter.usersController = new users_controller_1.UsersController();
