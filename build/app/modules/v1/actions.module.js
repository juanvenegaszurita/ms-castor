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
exports.ActionsModule = void 0;
const actions_bd_1 = require("../../bd/actions.bd");
const history_task_bd_1 = require("../../bd/history-task.bd");
class ActionsModule {
    getAllActions() {
        return __awaiter(this, void 0, void 0, function* () {
            const action = yield actions_bd_1.Actions.findAll();
            return { payload: action, message: "", code: "200" };
        });
    }
    getActions(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const action = yield actions_bd_1.Actions.findByPk(id);
            return { payload: action, message: "", code: "200" };
        });
    }
    updateActions(UID, action) {
        return __awaiter(this, void 0, void 0, function* () {
            delete action.editable;
            const actionUpdate = yield actions_bd_1.Actions.update(action, { where: { idActions: action.idActions } });
            if (actionUpdate.length > 0) {
                history_task_bd_1.HistoryTasks.updateActions(UID, action);
                return { payload: action, message: '', code: "200" };
            }
            else
                return { payload: action, message: 'Error al actualziar', code: "200" };
        });
    }
    deleteActions(UID, id, idTask) {
        return __awaiter(this, void 0, void 0, function* () {
            const actionDelete = yield actions_bd_1.Actions.destroy({ where: { idActions: id } });
            if (actionDelete > 0) {
                history_task_bd_1.HistoryTasks.deleteActions(UID, id, idTask);
                return { payload: {}, message: '', code: "200" };
            }
            else
                return { payload: {}, message: 'Error al Eliminar', code: "200" };
        });
    }
    createActions(UID, action) {
        return __awaiter(this, void 0, void 0, function* () {
            delete action.editable;
            const actionCreate = yield actions_bd_1.Actions.create(action);
            action.idActions = parseInt(`${actionCreate.getDataValue('idActions')}`);
            history_task_bd_1.HistoryTasks.createActions(UID, action);
            return { payload: actionCreate, message: "", code: "200" };
        });
    }
}
exports.ActionsModule = ActionsModule;
