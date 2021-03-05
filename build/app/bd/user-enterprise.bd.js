"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEnterprise = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
class UserEnterprise extends sequelize_1.Model {
    static initModel() {
        this.init({
            UID: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
            idEnterprise: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
            isAdmin: sequelize_1.DataTypes.BOOLEAN,
            cargo: sequelize_1.DataTypes.STRING,
            status: sequelize_1.DataTypes.BOOLEAN,
        }, { sequelize: conexion_bd_1.sequelize, modelName: "userenterprises", timestamps: false });
    }
}
exports.UserEnterprise = UserEnterprise;
UserEnterprise.initModel();
