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
exports.UsersModule = void 0;
const user_enterprise_bd_1 = require("../../bd/user-enterprise.bd");
const user_bd_1 = require("../../bd/user.bd");
class UsersModule {
    getAllUsers(identerprise, UIDNotIn) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_bd_1.User.getAllUsers(identerprise, UIDNotIn);
            return { payload: user, message: "", code: "200" };
        });
    }
    getUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_bd_1.User.findByPk(id);
            return { payload: user, message: "", code: "200" };
        });
    }
    updateUsers(user, idEnterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const userenterprises = ((user === null || user === void 0 ? void 0 : user.userenterprises) && user.userenterprises.length > 0) ? user.userenterprises[0] : {};
            const userUpdate = yield user_bd_1.User.update(user, { where: { UID: user.UID } });
            const userEnterprise = yield user_enterprise_bd_1.UserEnterprise.update(userenterprises, { where: { UID: user.UID, idEnterprise } });
            if (userUpdate.length > 0 && userEnterprise.length > 0)
                return { payload: user, message: '', code: "200" };
            else
                return { payload: user, message: 'Error al actualziar', code: "200" };
        });
    }
    updateStatusUsers(data, idEnterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const userEnterprise = yield user_enterprise_bd_1.UserEnterprise.update({ status: data.status }, { where: { UID: data.UID, idEnterprise } });
            if (userEnterprise.length > 0)
                return { payload: data, message: '', code: "200" };
            else
                return { payload: data, message: 'Error al actualziar', code: "200" };
        });
    }
    deleteUsers(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDelete = yield user_bd_1.User.destroy({ where: { UID: id } });
            if (userDelete > 0)
                return { payload: {}, message: '', code: "200" };
            else
                return { payload: {}, message: 'Error al Eliminar', code: "200" };
        });
    }
    createUsers(user, idEnterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const userenterprises = ((user === null || user === void 0 ? void 0 : user.userenterprises) && user.userenterprises.length > 0) ? user.userenterprises[0] : null;
            const userCreate = yield user_bd_1.User.create(user);
            const userEnterprise = yield user_enterprise_bd_1.UserEnterprise.create({ idEnterprise, UID: user.UID, isAdmin: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.isAdmin, cargo: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.cargo, status: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.status });
            userCreate.setDataValue("userenterprises", [userEnterprise]);
            return { payload: userCreate, message: "", code: "200" };
        });
    }
    createExistingUser(user, idEnterprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const userenterprises = ((user === null || user === void 0 ? void 0 : user.userenterprises) && user.userenterprises.length > 0) ? user.userenterprises[0] : null;
            const existingUser = yield user_bd_1.User.findOne({ where: { email: user.email } });
            if (existingUser) {
                user.UID = existingUser.getDataValue("UID");
                const userEnterprise = yield user_enterprise_bd_1.UserEnterprise.create({ idEnterprise, UID: user.UID, isAdmin: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.isAdmin, cargo: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.cargo, status: userenterprises === null || userenterprises === void 0 ? void 0 : userenterprises.status });
                existingUser.setDataValue("userenterprises", [userEnterprise]);
                return { payload: existingUser, message: "", code: "200" };
            }
            else {
                return { payload: null, message: "Usuario no existe", code: "400" };
            }
        });
    }
    getUsersEnterprise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_bd_1.User.getUsersEnterprise(id);
            return { payload: user, message: "", code: "200" };
        });
    }
    getAllUsersSelect(identerprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_bd_1.User.getAllUsers(identerprise);
            return { payload: user, message: "", code: "200" };
        });
    }
}
exports.UsersModule = UsersModule;
