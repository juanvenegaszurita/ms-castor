"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTasks = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
class StatusTasks extends sequelize_1.Model {
    static initModel() {
        this.init({
            idStatus: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
            name: sequelize_1.DataTypes.STRING,
            posicion: sequelize_1.DataTypes.INTEGER,
            isStateChange: sequelize_1.DataTypes.BOOLEAN,
            idEnterprise: sequelize_1.DataTypes.INTEGER
        }, { sequelize: conexion_bd_1.sequelize, modelName: "statustasks", timestamps: false });
    }
}
exports.StatusTasks = StatusTasks;
StatusTasks.initModel();
