import { Model, DataTypes, Op, WhereOptions, JoinTableAttributes, literal, where, fn, col, Includeable } from "sequelize";
import { Literal, Where } from "sequelize/types/lib/utils";
import { sequelize } from "./conexion.bd";
import { Enterprise } from "./enterprisse.bd";
import { HistoryTasks } from "./history-task.bd";
import { Project } from "./projects.bd";
import { StatusTasks } from "./status-tasks.bd";
import { Tasks } from "./tasks.bd";
import { UserEnterprise } from "./user-enterprise.bd";

export class User extends Model {
  static initModel() {
    this.init(
      {
        UID: { type: DataTypes.STRING, primaryKey: true},
        email: DataTypes.STRING,
        nombre: DataTypes.STRING,
      },
      { sequelize, modelName: "users", timestamps: false }
    );
  }
  static getAllUsers(idEnterprise: number, UIDNotIn?: string) {
    const where : WhereOptions<JoinTableAttributes> = ( UIDNotIn ) ? { UID: {[Op.notIn]: [UIDNotIn]} } : {};
    return this.findAll({
      where,
      include: [
        { model: UserEnterprise, where: {idEnterprise} }
      ]
    });
  }
  static getUsersEnterprise(UID: string) {
    return this.findByPk( UID, {
      attributes: {
        exclude: [ "createdAt", "updatedAt" ]
      },
      include: [{
        model: Enterprise,
        as: 'Enterprise',
        attributes: {
          exclude: [  "createdAt", "updatedAt" ],
          include: ['idEnterprise', 'nombre', 'descripcion' ]
        },
        
      }]
    } )
  }
  static userProjectTask(idEnterprise: number, anio: string, paramWhere: {}, includeActions: boolean= false) {
    const whereLiteral: Literal = literal("`Enterprise->projects->tasks`.`assignedUser` = `users`.`UID`");
    const whereAnio: Where = where( fn('YEAR', col('CREATE_DATE')), anio);

    const include: Includeable[] = includeActions ? 
    [
      { model: Tasks, where: {
        ...paramWhere,
        whereLiteral,
        whereAnio
      }, include: [
        {model: HistoryTasks, where: {}},
        {model: StatusTasks, where: {isStateChange: false}}
      ]}
    ] :
    [
      { model: Tasks, where: {
        ...paramWhere,
        whereLiteral,
        whereAnio
      }}
    ];

    return this.findAll({
      include: [
        { model: Enterprise,
          where: { idEnterprise },
          as: 'Enterprise',
          include: [
          { model: Project, where: { idEnterprise }, include }
        ] },
      ]
    });
  }
}
User.initModel();