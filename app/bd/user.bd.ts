import { Model, DataTypes, Op, WhereOptions, JoinTableAttributes } from "sequelize";
import { sequelize } from "./conexion.bd";
import { Enterprise } from "./enterprisse.bd";
import { UserEnterprise } from "./user-enterprise.bd";

export class User extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        email: DataTypes.STRING,
        nombre: DataTypes.STRING,
      },
      { sequelize, modelName: "users", timestamps: false }
    );
  }
  static getAllUsers(idEnterprise: number, UIDNotIn?: string) {
    const where : WhereOptions<JoinTableAttributes> = ( UIDNotIn ) ? { UID: {[Op.notIn]: [UIDNotIn]} } : {};
    return this.findAll({
      where,
      include: [
        { model: UserEnterprise, where: {idEnterprise} }
      ]
    });
  }
  static getUsersEnterprise(UID: string) {
    return this.findByPk( UID, {
      attributes: {
        exclude: [ "createdAt", "updatedAt" ]
      },
      include: [{
        model: Enterprise,
        as: 'Enterprise',
        attributes: {
          exclude: [  "createdAt", "updatedAt" ],
          include: ['idEnterprise', 'nombre', 'descripcion' ]
        },
        
      }]
    } )
  }
}
User.initModel();