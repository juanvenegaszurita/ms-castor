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
exports.TasksModule = void 0;
const history_task_bd_1 = require("../../bd/history-task.bd");
const tasks_bd_1 = require("../../bd/tasks.bd");
class TasksModule {
    getAllTask(identerprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const tasks = yield tasks_bd_1.Tasks.getAllTask(identerprise);
            return { payload: tasks, message: '', code: "200" };
        });
    }
    getTask(id, identerprise) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = yield tasks_bd_1.Tasks.getTask(id, identerprise);
            return { payload: task, message: '', code: "200" };
        });
    }
    updateTask(UID, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskUpdate = yield tasks_bd_1.Tasks.update(task, { where: { idTask: task.idTask } });
            if (taskUpdate.length > 0) {
                history_task_bd_1.HistoryTasks.updateTask(UID, task);
                return { payload: task, message: '', code: "200" };
            }
            else
                return { payload: task, message: 'Error al actualziar', code: "200" };
        });
    }
    deleteTask(UID, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskDelete = yield tasks_bd_1.Tasks.update({ isDelete: true }, { where: { idTask: id } });
            if (taskDelete.length > 0) {
                history_task_bd_1.HistoryTasks.deleteTask(UID, id);
                return { payload: {}, message: '', code: "200" };
            }
            else
                return { payload: {}, message: 'Error al Eliminar', code: "200" };
        });
    }
    createTask(UID, task) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskCreate = yield tasks_bd_1.Tasks.create(task, { isNewRecord: true });
            task.idTask = parseInt(`${taskCreate.getDataValue('idTask')}`);
            history_task_bd_1.HistoryTasks.createTask(UID, task);
            return { payload: taskCreate, message: "", code: "200" };
        });
    }
    statusTasks(identerprise, query, isAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const statusTasksFInal = yield tasks_bd_1.Tasks.statusTasks(identerprise, query, isAdmin);
            return { payload: statusTasksFInal, message: '', code: "200" };
        });
    }
}
exports.TasksModule = TasksModule;
