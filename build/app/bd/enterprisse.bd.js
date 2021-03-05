"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enterprise = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
class Enterprise extends sequelize_1.Model {
    static initModel() {
        this.init({
            idEnterprise: { type: sequelize_1.DataTypes.INTEGER, primaryKey: true },
            nombre: sequelize_1.DataTypes.STRING,
            descripcion: sequelize_1.DataTypes.STRING,
        }, { sequelize: conexion_bd_1.sequelize, modelName: "enterprises", timestamps: false });
    }
}
exports.Enterprise = Enterprise;
Enterprise.initModel();
