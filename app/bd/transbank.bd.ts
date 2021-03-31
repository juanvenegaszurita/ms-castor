import { Model, DataTypes } from "sequelize";
import { sequelize } from "./conexion.bd";
import { Enterprise } from "./enterprisse.bd";
import { UserEnterprise } from "./user-enterprise.bd";

export class Transbank extends Model {
  static initModel() {
    this.init(
      {
        idTransbank: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        token: DataTypes.STRING,
        buy_order: DataTypes.STRING,
        anio: DataTypes.INTEGER,
        mes: DataTypes.INTEGER,
        status: DataTypes.STRING,
        jsonTransbank: DataTypes.STRING,
        idEnterprise: DataTypes.INTEGER,
        transaction_date: DataTypes.DATE,
        idEnterprisesPlans: DataTypes.INTEGER,
      },
      { sequelize, modelName: "transbank", timestamps: false }
    );
  }
  static async TransbankEnterprisesUser(token: string, UID: string) {
    return this.findOne({
      where: {token},
      include: [
        {
          model: Enterprise,
          include: [
            {model: UserEnterprise, where: {UID}}
          ]
        }
      ]
    });
  }
}
Transbank.initModel();