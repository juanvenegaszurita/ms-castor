import { Model, DataTypes, Op, WhereOptions, JoinTableAttributes, literal, where, fn, col, Includeable } from "sequelize";
import { Literal, Where } from "sequelize/types/lib/utils";
import { sequelize } from "./conexion.bd";
import { EnterprisesPlans } from "./enterprises-plans.bd";
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
        cumpleanos: DataTypes.DATE,
      },
      { sequelize, modelName: "users", timestamps: false }
    );
  }
  static getFullUser(idEnterprise: number, UID: string) {
    return this.findByPk(UID, {
      include: [
        { model: UserEnterprise, where: {idEnterprise}, include: [ {model: this, as: 'userBoss'} ]},
      ]
    });
  }
  static getAllUsers(idEnterprise: number, UIDNotIn?: string) {
    const where : WhereOptions<JoinTableAttributes> = ( UIDNotIn ) ? { UID: {[Op.notIn]: [UIDNotIn]} } : {};
    return this.findAll({
      where,
      include: [
        { model: UserEnterprise, where: {idEnterprise}, include: [ {model: this, as: 'userBoss'} ]},
      ]
    });
  }
  static getUsersEnterprise(UID: string) {
    const now = new Date();
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
        include: [
          { model: EnterprisesPlans, where: {anio: now.getFullYear(), mes: (now.getMonth()+1)}, required: false }
        ]
      }]
    } )
  }
  static userProjectTask(idEnterprise: number, anio: string, paramWhere: {}, includeActions: boolean= false) {
    const whereLiteral: Literal = literal("`Enterprise->projects->tasks`.`assignedUser` = `users`.`UID`");
    const whereAnio: Where = where( fn('YEAR', col('CREATE_DATE')), anio);

    const include: Includeable[] = includeActions ? 
    [
      { model: Tasks, where: {
        isDelete: false,
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
        isDelete: false,
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