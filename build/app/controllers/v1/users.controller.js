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
exports.UsersController = void 0;
const users_module_1 = require("../../modules/v1/users.module");
class UsersController {
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const UID = `${req.headers.uid}`;
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().getAllUsers(identerprise, UID));
        });
    }
    getUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            res.json(yield new users_module_1.UsersModule().getUsers(id));
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().updateUsers(user, identerprise));
        });
    }
    updateStatusUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataStatus = req.body;
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().updateStatusUsers(dataStatus, identerprise));
        });
    }
    deleteUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            res.json(yield new users_module_1.UsersModule().deleteUsers(id));
        });
    }
    createUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().createUsers(user, identerprise));
        });
    }
    createExistingUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = req.body;
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().createExistingUser(user, identerprise));
        });
    }
    getUsersEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = req.params.id;
            res.json(yield new users_module_1.UsersModule().getUsersEnterprise(id));
        });
    }
    getAllUsersSelect(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new users_module_1.UsersModule().getAllUsersSelect(identerprise));
        });
    }
}
exports.UsersController = UsersController;
