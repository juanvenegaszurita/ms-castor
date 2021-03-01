import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class Enterprise extends Model {
  static initModel() {
    this.init(
      {
        idEnterprise: { type: DataTypes.INTEGER, primaryKey: true},
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
      },
      { sequelize, modelName: "enterprises", timestamps: false }
    );
  }
}
Enterprise.initModel();