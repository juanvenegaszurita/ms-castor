"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexBD = void 0;
const actions_bd_1 = require("./actions.bd");
const enterprisse_bd_1 = require("./enterprisse.bd");
const history_task_bd_1 = require("./history-task.bd");
const projects_bd_1 = require("./projects.bd");
const status_tasks_bd_1 = require("./status-tasks.bd");
const tasks_bd_1 = require("./tasks.bd");
const user_enterprise_bd_1 = require("./user-enterprise.bd");
const user_bd_1 = require("./user.bd");
class IndexBD {
    static init() {
        enterprisse_bd_1.Enterprise.belongsToMany(user_bd_1.User, {
            as: "User",
            through: "userenterprises",
            foreignKey: "idEnterprise",
        });
        user_bd_1.User.belongsToMany(enterprisse_bd_1.Enterprise, {
            as: "Enterprise",
            through: "userenterprises",
            foreignKey: "UID",
        });
        user_bd_1.User.hasMany(user_enterprise_bd_1.UserEnterprise, { foreignKey: 'UID' });
        user_bd_1.User.hasMany(history_task_bd_1.HistoryTasks, { foreignKey: 'UID' });
        projects_bd_1.Project.hasOne(enterprisse_bd_1.Enterprise, { foreignKey: 'idEnterprise' });
        projects_bd_1.Project.hasMany(tasks_bd_1.Tasks, { foreignKey: 'idProject' });
        status_tasks_bd_1.StatusTasks.hasOne(enterprisse_bd_1.Enterprise, { foreignKey: 'idEnterprise' });
        tasks_bd_1.Tasks.hasOne(enterprisse_bd_1.Enterprise, { foreignKey: 'idEnterprise' });
        tasks_bd_1.Tasks.hasOne(projects_bd_1.Project, { foreignKey: 'idProject' });
        tasks_bd_1.Tasks.hasOne(user_bd_1.User, { foreignKey: 'UID' });
        tasks_bd_1.Tasks.hasOne(status_tasks_bd_1.StatusTasks, { foreignKey: 'idStatus' });
        tasks_bd_1.Tasks.hasMany(actions_bd_1.Actions, { foreignKey: 'idTask' });
        tasks_bd_1.Tasks.hasMany(history_task_bd_1.HistoryTasks, { foreignKey: 'idTask' });
        history_task_bd_1.HistoryTasks.belongsTo(user_bd_1.User, { foreignKey: 'UID' });
        history_task_bd_1.HistoryTasks.belongsTo(tasks_bd_1.Tasks, { foreignKey: 'idTask' });
        actions_bd_1.Actions.belongsTo(tasks_bd_1.Tasks, { foreignKey: 'idTask' });
    }
}
exports.IndexBD = IndexBD;
