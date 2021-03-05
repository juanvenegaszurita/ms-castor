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
exports.ActionsController = void 0;
const actions_module_1 = require("../../modules/v1/actions.module");
class ActionsController {
    getAllActions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield new actions_module_1.ActionsModule().getAllActions());
        });
    }
    getActions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new actions_module_1.ActionsModule().getActions(id));
        });
    }
    updateActions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const action = req.body;
            const UID = `${req.headers.uid}`;
            res.json(yield new actions_module_1.ActionsModule().updateActions(UID, action));
        });
    }
    deleteActions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const idTask = parseInt(req.params.idTask);
            const UID = `${req.headers.uid}`;
            res.json(yield new actions_module_1.ActionsModule().deleteActions(UID, id, idTask));
        });
    }
    createActions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const action = req.body;
            const UID = `${req.headers.uid}`;
            res.json(yield new actions_module_1.ActionsModule().createActions(UID, action));
        });
    }
}
exports.ActionsController = ActionsController;
