import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class User extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        idEnterprise: DataTypes.STRING,
        email: DataTypes.STRING,
        nombre: DataTypes.STRING,
        cargo: DataTypes.STRING,
      },
      { sequelize, modelName: "users", timestamps: false }
    )
  }
}

User.initModel();