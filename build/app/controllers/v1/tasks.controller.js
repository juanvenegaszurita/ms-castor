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
exports.TasksController = void 0;
const task_module_1 = require("../../modules/v1/task.module");
class TasksController {
    getAllTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new task_module_1.TasksModule().getAllTask(identerprise));
        });
    }
    getTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            const id = parseInt(req.params.id);
            res.json(yield new task_module_1.TasksModule().getTask(id, identerprise));
        });
    }
    updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = req.body;
            const UID = `${req.headers.uid}`;
            res.json(yield new task_module_1.TasksModule().updateTask(UID, task));
        });
    }
    deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const UID = `${req.headers.uid}`;
            res.json(yield new task_module_1.TasksModule().deleteTask(UID, id));
        });
    }
    createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const task = req.body;
            const UID = `${req.headers.uid}`;
            res.json(yield new task_module_1.TasksModule().createTask(UID, task));
        });
    }
    statusTasks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const isAdmin = Boolean(req.headers.isadmin);
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new task_module_1.TasksModule().statusTasks(identerprise, req.query, isAdmin));
        });
    }
}
exports.TasksController = TasksController;
