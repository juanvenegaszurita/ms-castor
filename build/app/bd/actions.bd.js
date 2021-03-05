"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actions = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
class Actions extends sequelize_1.Model {
    static initModel() {
        this.init({
            idActions: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            idTask: sequelize_1.DataTypes.INTEGER,
            descriptions: sequelize_1.DataTypes.STRING,
            assignedUser: sequelize_1.DataTypes.STRING,
            CREATE_DATE: sequelize_1.DataTypes.DATE,
            editable: sequelize_1.DataTypes.BOOLEAN
        }, { sequelize: conexion_bd_1.sequelize, modelName: "actions", timestamps: false });
    }
}
exports.Actions = Actions;
Actions.initModel();
