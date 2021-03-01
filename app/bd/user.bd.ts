import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";
import { Enterprise } from "./enterprisse.bd";

export class User extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        email: DataTypes.STRING,
        nombre: DataTypes.STRING,
        cargo: DataTypes.STRING,
        isAdmin: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "users", timestamps: false }
    );
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
        through: {
          attributes: []
        },
      }]
    } )
  }
}
User.initModel();