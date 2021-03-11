import { TasksModels } from "app/@models/tasks.model";
import { Model, DataTypes, Includeable } from "sequelize";
import { StatusTasksModels } from "../@models/status-tasks.model";
import { Actions } from "./actions.bd";
import { sequelize } from "./conexion.bd";
import { HistoryTasks } from "./history-task.bd";
import { Project } from "./projects.bd";
import { StatusTasks } from "./status-tasks.bd";
import { User } from "./user.bd";

export class Tasks extends Model {
  static initModel() {
    this.init(
      {
        idTask: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        idProject: DataTypes.INTEGER,
        title: DataTypes.STRING,
        details: DataTypes.STRING,
        assignedUser: DataTypes.STRING,
        idStatus: DataTypes.INTEGER,
        CREATE_DATE: DataTypes.DATE,
        isDelete: DataTypes.BOOLEAN,
      },
      { sequelize, modelName: "tasks", timestamps: false }
    );
  }
  static getAllTask(idEnterprise: number) {
    return this.findAll({
      where: { isDelete: false }
    });
  }
  static getTask( id: number, idEnterprise: number ) {
    return this.findOne( { where: { idTask: id, isDelete: false } } );
  }
  static async statusTasks( idEnterprise: number, query: {idProject?: number, assignedUser?: string}, isAdmin: boolean, UID: string ) {
    let statusTasksFInal: StatusTasksModels[] = [];
    const status = await StatusTasks.findAll({where: {idEnterprise}});
    
    for (const statu of status) {
      let where: { idStatus: number, idProject?: number, assignedUser?: string, isDelete: boolean } = {
        idStatus: statu.getDataValue('idStatus'),
        isDelete: false
      };
      if( query?.idProject ) where.idProject = query.idProject;
      if(isAdmin) {
        if( query?.assignedUser )
          where.assignedUser = query.assignedUser;
      } else {
        where.assignedUser = UID;
      }
      const include: Includeable[] = ( isAdmin ) ?
        [
          {model: Actions, as: 'actions'},
          {model: HistoryTasks, as: 'historytasks', include: [
            {model: User, as: 'user', attributes: {exclude: ['UID', 'email', 'cargo', 'isAdmin'], include: ['nombre']}}
          ]},
        ] : 
        [
          {model: Actions, as: 'actions'},
        ];
      
      const project = await Project.findAll(
        {
          where: {idEnterprise},
          include: [
            {
              model: Tasks,
              where,
              include
            }
          ]
        }
      );
      const tasks: Tasks[] = [];
      if( project.length > 0 ) {
        project.forEach( pro => {
          const ta = pro.getDataValue('tasks') as Tasks[];
          if( ta && ta.length > 0 ) {
            ta.forEach(t => {
              t.setDataValue( "color", pro.getDataValue('avatar') );
              tasks.push(t);
            });
          }
        });
      }

      statusTasksFInal.push({
        idStatus: statu.getDataValue('idStatus'),
        idEnterprise: statu.getDataValue('idEnterprise'),
        name: statu.getDataValue('name'),
        posicion: statu.getDataValue('posicion'),
        isStateChange: statu.getDataValue('isStateChange'),
        tasks: tasks
      });
    }

    return statusTasksFInal;
  }
}
Tasks.initModel();