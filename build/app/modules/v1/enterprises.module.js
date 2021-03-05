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
exports.EnterprisesModule = void 0;
class EnterprisesModule {
    getAllEnterprise() {
        return __awaiter(this, void 0, void 0, function* () {
            return { payload: 'Enterprises getAllEmpresa', message: '', code: 200 };
        });
    }
    getEnterprise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { payload: 'Enterprises getEmpresa' + id, message: '', code: 200 };
        });
    }
    updateEnterprise() {
        return __awaiter(this, void 0, void 0, function* () {
            return { payload: 'Enterprises updateEmpresa', message: '', code: 200 };
        });
    }
    deleteEnterprise(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return { payload: 'Enterprises deleteEmpresa' + id, message: '', code: 200 };
        });
    }
    createEnterprise() {
        return __awaiter(this, void 0, void 0, function* () {
            return { payload: 'Enterprises createEmpresa', message: '', code: 200 };
        });
    }
}
exports.EnterprisesModule = EnterprisesModule;
