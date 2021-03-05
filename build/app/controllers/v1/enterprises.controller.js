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
exports.EnterprisesController = void 0;
const enterprises_module_1 = require("../../modules/v1/enterprises.module");
class EnterprisesController {
    getAllEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield new enterprises_module_1.EnterprisesModule().getAllEnterprise());
        });
    }
    getEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new enterprises_module_1.EnterprisesModule().getEnterprise(id));
        });
    }
    updateEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield new enterprises_module_1.EnterprisesModule().updateEnterprise());
        });
    }
    deleteEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            res.json(yield new enterprises_module_1.EnterprisesModule().deleteEnterprise(id));
        });
    }
    createEnterprise(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json(yield new enterprises_module_1.EnterprisesModule().createEnterprise());
        });
    }
}
exports.EnterprisesController = EnterprisesController;
