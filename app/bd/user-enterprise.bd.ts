import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class UserEnterprise extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        idEnterprise: { type: DataTypes.INTEGER, primaryKey: true},
        isAdmin: DataTypes.BOOLEAN,
        cargo: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "userenterprises", timestamps: false }
    )
  }
}
UserEnterprise.initModel();