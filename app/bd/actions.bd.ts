import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class Actions extends Model {
  static initModel() {
    this.init(
      {
        idActions: { type: DataTypes.INTEGER, primaryKey: true },
        idTask: DataTypes.INTEGER,
        descriptions: DataTypes.STRING,
        assignedUser: DataTypes.STRING,
        CREATE_DATE: DataTypes.DATE,
        editable: DataTypes.BOOLEAN
      },
      { sequelize, modelName: "actions", timestamps: false }
    );
  }
}
Actions.initModel();