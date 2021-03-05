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
exports.StatustaskController = void 0;
const status_tasks_module_1 = require("../../modules/v1/status-tasks.module");
class StatustaskController {
    getAllStatustask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const identerprise = parseInt(req.headers.identerprise + '');
            res.json(yield new status_tasks_module_1.StatusTasksModule().getAllStatustask(identerprise));
        });
    }
    getStatustask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new status_tasks_module_1.StatusTasksModule().getStatustask(id));
        });
    }
    updateStatustask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const statustask = req.body;
            res.json(yield new status_tasks_module_1.StatusTasksModule().updateStatustask(statustask));
        });
    }
    deleteStatustask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new status_tasks_module_1.StatusTasksModule().deleteStatustask(id));
        });
    }
    createStatustask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const statustask = req.body;
            res.json(yield new status_tasks_module_1.StatusTasksModule().createStatustask(statustask));
        });
    }
}
exports.StatustaskController = StatustaskController;
