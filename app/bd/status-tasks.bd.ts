import { Model, DataTypes, Sequelize } from "sequelize";
import { sequelize } from "./conexion.bd";
import { Tasks } from "./tasks.bd";

export class StatusTasks extends Model {

  static initModel() {
    this.init(
      {
        idStatus: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,
        posicion: DataTypes.INTEGER,
        isStateChange: DataTypes.BOOLEAN,
        idEnterprise: DataTypes.INTEGER
      },
      { sequelize, modelName: "statustasks", timestamps: false }
    );
  }
  static getStatusTasks(idEnterprise: number, id?: number) {
    const where = id? {idStatus: id}: {};
    return StatusTasks.findAll({
      attributes: {
        include: [[Sequelize.fn("COUNT", Sequelize.col("tasks.idStatus")), "countTasks"]]
      },
      where: {
        idEnterprise,
        ...where
      },
      include: {
        model: Tasks,
        attributes: [],
        required:false,
      },
      group: ['statustasks.idStatus'],
      order: [['posicion', 'ASC']],
    });
  }
}
StatusTasks.initModel();