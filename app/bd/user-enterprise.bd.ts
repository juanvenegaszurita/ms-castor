import { Model, DataTypes, where, fn, col } from "sequelize";
import { Where } from "sequelize/types/lib/utils";
import { sequelize } from "./conexion.bd";
import { User } from "./user.bd";

export class UserEnterprise extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        idEnterprise: { type: DataTypes.INTEGER, primaryKey: true},
        isAdmin: DataTypes.BOOLEAN,
        cargo: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        boss: DataTypes.STRING,
      },
      { sequelize, modelName: "userenterprises", timestamps: false }
    )
  }
  static birthdays() {
    const whereMONTH: Where = where( fn('MONTH', col('cumpleanos')), fn('MONTH', fn('NOW')));
    const whereDAY: Where = where( fn('DAY', col('cumpleanos')), fn('DAY', fn('NOW')));
    return this.findAll({
      include: [
        { model: User, where: {whereMONTH, whereDAY}, as: 'user' }
      ]
    });
  }
}
UserEnterprise.initModel();