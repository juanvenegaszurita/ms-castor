"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const conexion_bd_1 = require("./conexion.bd");
const enterprisse_bd_1 = require("./enterprisse.bd");
const user_enterprise_bd_1 = require("./user-enterprise.bd");
class User extends sequelize_1.Model {
    static initModel() {
        this.init({
            UID: { type: sequelize_1.DataTypes.STRING, primaryKey: true },
            email: sequelize_1.DataTypes.STRING,
            nombre: sequelize_1.DataTypes.STRING,
        }, { sequelize: conexion_bd_1.sequelize, modelName: "users", timestamps: false });
    }
    static getAllUsers(idEnterprise, UIDNotIn) {
        const where = (UIDNotIn) ? { UID: { [sequelize_1.Op.notIn]: [UIDNotIn] } } : {};
        return this.findAll({
            where,
            include: [
                { model: user_enterprise_bd_1.UserEnterprise, where: { idEnterprise } }
            ]
        });
    }
    static getUsersEnterprise(UID) {
        return this.findByPk(UID, {
            attributes: {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [{
                    model: enterprisse_bd_1.Enterprise,
                    as: 'Enterprise',
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                        include: ['idEnterprise', 'nombre', 'descripcion']
                    },
                }]
        });
    }
}
exports.User = User;
User.initModel();
