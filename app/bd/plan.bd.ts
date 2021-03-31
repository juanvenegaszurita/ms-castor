import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class Plan extends Model {
  static initModel() {
    this.init(
      {
        idplans: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        precio: DataTypes.INTEGER,
      },
      { sequelize, modelName: "plans", timestamps: false }
    );
  }
}
Plan.initModel();
