import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class StatusTasks extends Model {

  static initModel() {
    this.init(
      {
        idStatus: { type: DataTypes.INTEGER, primaryKey: true },
        name: DataTypes.STRING,
        posicion: DataTypes.INTEGER,
        isStateChange: DataTypes.BOOLEAN,
        idEnterprise: DataTypes.INTEGER
      },
      { sequelize, modelName: "statustasks", timestamps: false }
    );
  }
}
StatusTasks.initModel();