import { Model, DataTypes } from "sequelize";
import { StatusTasksModels } from "../@models/status-tasks.model";
import { Actions } from "./actions.bd";
import { sequelize } from "./conexion.bd";
import { StatusTasks } from "./status-tasks.bd";

export class Tasks extends Model {
  static initModel() {
    this.init(
      {
        idTask: { type: DataTypes.INTEGER, primaryKey: true },
        idProject: DataTypes.INTEGER,
        title: DataTypes.STRING,
        details: DataTypes.STRING,
        assignedUser: DataTypes.STRING,
        idStatus: DataTypes.INTEGER,
        CREATE_DATE: DataTypes.DATE
      },
      { sequelize, modelName: "tasks", timestamps: false }
    );
  }
  static getAllTask() {
    return this.findAll();
  }
  static getTask( id: number ) {
    return this.findByPk(id); 
  }
  static async statusTasks( query: {idProject?: number} ) {
    let statusTasksFInal: StatusTasksModels[] = [];
    const status = await StatusTasks.findAll();
    
    for (const statu of status) {
      let where: { idStatus: number, idProject?: number } = {idStatus: statu.getDataValue('idStatus')};
      if( query?.idProject ) where.idProject = query.idProject;
      const tasks = await this.findAll( {
        where,
        include: [ {model: Actions, as: 'actions'} ]
      });

      statusTasksFInal.push({
        idStatus: statu.getDataValue('idStatus'),
        idEnterprise: statu.getDataValue('idEnterprise'),
        name: statu.getDataValue('name'),
        posicion: statu.getDataValue('posicion'),
        isStateChange: statu.getDataValue('isStateChange'),
        tasks: tasks
      })
    }

    return statusTasksFInal;
  }
}
Tasks.initModel();