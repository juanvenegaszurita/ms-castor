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
exports.HistoryTasks = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
class HistoryTasks extends sequelize_1.Model {
    static initModel() {
        this.init({
            idHistoryTask: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
            nameTable: sequelize_1.DataTypes.STRING,
            descriptions: sequelize_1.DataTypes.STRING,
            CREATE_DATE: sequelize_1.DataTypes.DATE,
            UID: sequelize_1.DataTypes.STRING,
            idTask: sequelize_1.DataTypes.INTEGER,
        }, { sequelize: conexion_bd_1.sequelize, modelName: "historytasks", timestamps: false });
    }
    static insertLog(nameTable, idTask, descriptions, UID) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {
                nameTable,
                descriptions,
                UID,
                idTask,
                CREATE_DATE: new Date()
            };
            this.create(data);
        });
    }
    static createTask(UID, task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecha = new Date(task.CREATE_DATE + "");
                const strLog = `Creación de Tarea
id: ${task.idTask}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Details: ${task.details}
Title: ${task.title}
Estado: ${task.idStatus}
Proyecto: ${task.idProject}
`;
                yield this.insertLog("task", task.idTask, strLog, UID);
            }
            catch (error) {
                console.log("Error al insertar Log createTask");
            }
        });
    }
    static updateTask(UID, task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecha = new Date(task.CREATE_DATE + "");
                const strLog = `Actualización de Tarea
id: ${task.idTask}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Details: ${task.details}
Title: ${task.title}
Estado: ${task.idStatus}
Proyecto: ${task.idProject}
`;
                yield this.insertLog("task", task.idTask, strLog, UID);
            }
            catch (error) {
                console.log("Error al insertar Log updateTask");
            }
        });
    }
    static deleteTask(UID, idTask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.insertLog("task", idTask, "Eliminación de Tarea", UID);
            }
            catch (error) {
                console.log("Error al insertar Log deleteTask");
            }
        });
    }
    static createActions(UID, action) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecha = new Date(action.CREATE_DATE + "");
                const strLog = `Creación de Acción
id: ${action.idActions}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Descripción: ${action.descriptions}
`;
                yield this.insertLog("actions", (action.idTask ? action.idTask : 0), strLog, UID);
            }
            catch (error) {
                console.log("Error al insertar Log createActions");
            }
        });
    }
    static updateActions(UID, action) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const fecha = new Date(action.CREATE_DATE + "");
                const strLog = `Actualización de Acción
id: ${action.idActions}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Descripción: ${action.descriptions}
`;
                yield this.insertLog("actions", (action.idTask ? action.idTask : 0), strLog, UID);
            }
            catch (error) {
                console.log("Error al insertar Log updateActions");
            }
        });
    }
    static deleteActions(UID, idActions, idTask) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.insertLog("actions", idTask, `Eliminación de Acción id: ${idActions}`, UID);
            }
            catch (error) {
                console.log("Error al insertar Log deleteActions");
            }
        });
    }
}
exports.HistoryTasks = HistoryTasks;
HistoryTasks.initModel();
