import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";
import { Plan } from "./plan.bd";

export class EnterprisesPlans extends Model {
  static initModel() {
    this.init(
      {
        idEnterprisesPlans: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
        idplans: DataTypes.INTEGER,
        idEnterprise: DataTypes.INTEGER,
        mes: DataTypes.INTEGER,
        nombreMes: DataTypes.STRING,
        anio: DataTypes.INTEGER,
        pagado: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "enterprisesplans", timestamps: false }
    );
  }
  static async detailsPlan(idEnterprise: number, anio: number) {
    return this.findAll({
      where: {anio, idEnterprise},
      include: [
        {model: Plan}
      ]
    });
  }
}
EnterprisesPlans.initModel();
