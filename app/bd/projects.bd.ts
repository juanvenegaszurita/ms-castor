import { Model, DataTypes, Sequelize } from "sequelize";
import { ProjectsModels } from "../@models/projects.model";
import { sequelize } from "./conexion.bd";
import { Tasks } from "./tasks.bd";

export class Project extends Model {
  static initModel() {
    this.init(
      {
        idProject: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        subtitle: DataTypes.STRING,
        descriptions: DataTypes.STRING,
        avatar: DataTypes.STRING,
        idEnterprise: DataTypes.INTEGER
      },
      { sequelize, modelName: "projects", timestamps: false }
    );
  }
  static getProjectCountTasks(idEnterprise: number, where: ProjectsModels | any = {}) {
    return this.findAll({
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("tasks.idProject")), "countTasks"]]
      },
      where: {
        idEnterprise,
        ...where
      },
      include: {
        model: Tasks,
        attributes: []
      },
      group: ['projects.idProject']
    })
  }
}
Project.initModel();