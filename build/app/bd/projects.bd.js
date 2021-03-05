"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
const tasks_bd_1 = require("./tasks.bd");
class Project extends sequelize_1.Model {
    static initModel() {
        this.init({
            idProject: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            title: sequelize_1.DataTypes.STRING,
            subtitle: sequelize_1.DataTypes.STRING,
            descriptions: sequelize_1.DataTypes.STRING,
            avatar: sequelize_1.DataTypes.STRING,
            idEnterprise: sequelize_1.DataTypes.INTEGER
        }, { sequelize: conexion_bd_1.sequelize, modelName: "projects", timestamps: false });
    }
    static getProjectCountTasks(idEnterprise, where = {}) {
        return this.findAll({
            attributes: {
                include: [[sequelize_1.Sequelize.fn("COUNT", sequelize_1.Sequelize.col("tasks.idProject")), "countTasks"]]
            },
            where: Object.assign({ idEnterprise }, where),
            include: {
                model: tasks_bd_1.Tasks,
                attributes: []
            },
            group: ['projects.idProject']
        });
    }
}
exports.Project = Project;
Project.initModel();
