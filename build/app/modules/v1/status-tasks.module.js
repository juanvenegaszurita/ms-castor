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
exports.StatusTasksModule = void 0;
const status_tasks_bd_1 = require("../../bd/status-tasks.bd");
class StatusTasksModule {
    getAllStatustask(identerprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTasks = yield status_tasks_bd_1.StatusTasks.findAll({ where: { identerprise } });
            return { payload: statusTasks, message: '', code: "200" };
        });
    }
    getStatustask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTask = yield status_tasks_bd_1.StatusTasks.findByPk(id);
            return { payload: statusTask, message: '', code: "200" };
        });
    }
    updateStatustask(statusTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTaskUpdate = yield status_tasks_bd_1.StatusTasks.update(statusTask, { where: { idStatus: statusTask.idStatus } });
            if (statusTaskUpdate.length > 0)
                return { payload: statusTask, message: '', code: "200" };
            else
                return { payload: statusTask, message: 'Error al actualziar', code: "200" };
        });
    }
    deleteStatustask(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTaskDelete = yield status_tasks_bd_1.StatusTasks.destroy({ where: { idStatus: id } });
            if (statusTaskDelete > 0)
                return { payload: {}, message: '', code: "200" };
            else
                return { payload: {}, message: 'Error al Eliminar', code: "200" };
        });
    }
    createStatustask(statusTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTaskCreate = yield status_tasks_bd_1.StatusTasks.create(statusTask);
            return { payload: statusTaskCreate, message: '', code: "200" };
        });
    }
}
exports.StatusTasksModule = StatusTasksModule;
