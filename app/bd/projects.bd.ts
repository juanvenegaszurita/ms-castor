import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";

export class Project extends Model {
  static initModel() {
    this.init(
      {
        idProject: { type: DataTypes.INTEGER, primaryKey: true },
        title: DataTypes.STRING,
        subtitle: DataTypes.STRING,
        descriptions: DataTypes.STRING,
        avatar: DataTypes.STRING,
        idEnterprise: DataTypes.INTEGER
      },
      { sequelize, modelName: "projects", timestamps: false }
    );
  }
}
Project.initModel();