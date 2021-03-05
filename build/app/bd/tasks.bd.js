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
exports.Tasks = void 0;
const sequelize_1 = require("sequelize");
const actions_bd_1 = require("./actions.bd");
const conexion_bd_1 = require("./conexion.bd");
const history_task_bd_1 = require("./history-task.bd");
const projects_bd_1 = require("./projects.bd");
const status_tasks_bd_1 = require("./status-tasks.bd");
const user_bd_1 = require("./user.bd");
class Tasks extends sequelize_1.Model {
    static initModel() {
        this.init({
            idTask: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            idProject: sequelize_1.DataTypes.INTEGER,
            title: sequelize_1.DataTypes.STRING,
            details: sequelize_1.DataTypes.STRING,
            assignedUser: sequelize_1.DataTypes.STRING,
            idStatus: sequelize_1.DataTypes.INTEGER,
            CREATE_DATE: sequelize_1.DataTypes.DATE,
            isDelete: sequelize_1.DataTypes.BOOLEAN,
        }, { sequelize: conexion_bd_1.sequelize, modelName: "tasks", timestamps: false });
    }
    static getAllTask(idEnterprise) {
        return this.findAll({
            where: { isDelete: false }
        });
    }
    static getTask(id, idEnterprise) {
        return this.findOne({ where: { idTask: id, isDelete: false } });
    }
    static statusTasks(idEnterprise, query, isAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            let statusTasksFInal = [];
            const status = yield status_tasks_bd_1.StatusTasks.findAll({ where: { idEnterprise } });
            for (const statu of status) {
                let where = {
                    idStatus: statu.getDataValue('idStatus'),
                    isDelete: false
                };
                if (query === null || query === void 0 ? void 0 : query.idProject)
                    where.idProject = query.idProject;
                if (query === null || query === void 0 ? void 0 : query.assignedUser)
                    where.assignedUser = query.assignedUser;
                const include = (isAdmin) ?
                    [
                        { model: actions_bd_1.Actions, as: 'actions' },
                        { model: history_task_bd_1.HistoryTasks, as: 'historytasks', include: [
                                { model: user_bd_1.User, as: 'user', attributes: { exclude: ['UID', 'email', 'cargo', 'isAdmin'], include: ['nombre'] } }
                            ] },
                    ] :
                    [
                        { model: actions_bd_1.Actions, as: 'actions' },
                    ];
                const project = yield projects_bd_1.Project.findAll({
                    where: { idEnterprise },
                    include: [
                        {
                            model: Tasks,
                            where,
                            include
                        }
                    ]
                });
                const tasks = (project.length > 0) ? project[0].getDataValue('tasks') : [];
                statusTasksFInal.push({
                    idStatus: statu.getDataValue('idStatus'),
                    idEnterprise: statu.getDataValue('idEnterprise'),
                    name: statu.getDataValue('name'),
                    posicion: statu.getDataValue('posicion'),
                    isStateChange: statu.getDataValue('isStateChange'),
                    tasks: tasks
                });
            }
            return statusTasksFInal;
        });
    }
}
exports.Tasks = Tasks;
Tasks.initModel();
