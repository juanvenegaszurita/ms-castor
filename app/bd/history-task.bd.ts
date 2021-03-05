import { Model, DataTypes } from "sequelize";
import { ActionsModels } from "../@models/actions.model";
import { HistoryTaskModel } from "../@models/history-task.model";
import { TasksModels } from "../@models/tasks.model";
import { sequelize } from "./conexion.bd";

export class HistoryTasks extends Model {
  static initModel() {
    this.init(
      {
        idHistoryTask: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, },
        nameTable: DataTypes.STRING,
        descriptions: DataTypes.STRING,
        CREATE_DATE: DataTypes.DATE,
        UID: DataTypes.STRING,
        idTask: DataTypes.INTEGER,
      },
      { sequelize, modelName: "historytasks", timestamps: false }
    );
  }
  private static async insertLog( nameTable: string, idTask: number, descriptions: string, UID: string ) {
    const data: HistoryTaskModel = {
      nameTable,
      descriptions,
      UID,
      idTask,
      CREATE_DATE: new Date()
    };
    this.create( data );
  }
  static async createTask(UID: string, task: TasksModels) {
    try {
      const fecha = new Date(task.CREATE_DATE+"");
      const strLog = 
`Creación de Tarea
id: ${task.idTask}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Details: ${task.details}
Title: ${task.title}
Estado: ${task.idStatus}
Proyecto: ${task.idProject}
`;
      await this.insertLog("task", task.idTask, strLog, UID)
    } catch (error) {
      console.log("Error al insertar Log createTask");
    }
  }
  static async updateTask(UID: string, task: TasksModels) {
    try {
      const fecha = new Date(task.CREATE_DATE+"");
      const strLog = 
`Actualización de Tarea
id: ${task.idTask}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Details: ${task.details}
Title: ${task.title}
Estado: ${task.idStatus}
Proyecto: ${task.idProject}
`;
      await this.insertLog("task", task.idTask, strLog, UID);
    } catch (error) {
      console.log("Error al insertar Log updateTask");
    }
  }
  static async deleteTask(UID: string, idTask: number) {
    try {
      await this.insertLog("task", idTask, "Eliminación de Tarea", UID);
    } catch (error) {
      console.log("Error al insertar Log deleteTask");
    }
  }
  static async createActions(UID: string, action: ActionsModels) {
    
    try {
      const fecha = new Date(action.CREATE_DATE+"");
    const strLog = 
`Creación de Acción
id: ${action.idActions}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Descripción: ${action.descriptions}
`;
      await this.insertLog("actions", (action.idTask? action.idTask : 0), strLog, UID);
    } catch (error) {
      console.log("Error al insertar Log createActions");
    }
  }
  static async updateActions(UID: string, action: ActionsModels) {
    try {
      const fecha = new Date(action.CREATE_DATE+"");
      const strLog = 
`Actualización de Acción
id: ${action.idActions}
Fecha Creación : ${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}
Descripción: ${action.descriptions}
`;
      await this.insertLog("actions", (action.idTask? action.idTask : 0), strLog, UID);
    } catch (error) {
      console.log("Error al insertar Log updateActions");
    }
  }
  static async deleteActions(UID: string, idActions: number, idTask: number) {
    try {
      await this.insertLog("actions", idTask, `Eliminación de Acción id: ${idActions}`, UID);
    } catch (error) {
      console.log("Error al insertar Log deleteActions");
    }
  }
}
HistoryTasks.initModel();