import { Actions } from "./actions.bd";
import { Enterprise } from "./enterprisse.bd";
import { HistoryTasks } from "./history-task.bd";
import { Project } from "./projects.bd";
import { StatusTasks } from "./status-tasks.bd";
import { Tasks } from "./tasks.bd";
import { UserEnterprise } from "./user-enterprise.bd";
import { User } from "./user.bd";

export class IndexBD {
  static init() {
    Enterprise.belongsToMany( User, {
      as: "User",
      through: "userenterprises",
      foreignKey: "idEnterprise",
    });

    User.belongsToMany( Enterprise, {
      as: "Enterprise",
      through: "userenterprises",
      foreignKey: "UID",
    });
    User.hasMany( UserEnterprise, {foreignKey: 'UID'});
    User.hasMany( HistoryTasks, {foreignKey: 'UID'});
    User.hasMany( Tasks, {foreignKey: 'assignedUser'}); 

    Project.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    Project.hasMany( Tasks, { foreignKey: 'idProject' });

    Tasks.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    Tasks.hasOne( Project, {foreignKey: 'idProject'});
    Tasks.hasOne( User, {foreignKey: 'UID'});
    Tasks.belongsTo( StatusTasks, {foreignKey: 'idStatus'});
    Tasks.hasMany( Actions, {foreignKey: 'idTask'} )
    Tasks.hasMany( HistoryTasks, {foreignKey: 'idTask'} )

    StatusTasks.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    
    HistoryTasks.belongsTo( User, {foreignKey: 'UID'});
    HistoryTasks.belongsTo( Tasks, {foreignKey: 'idTask'});
    Actions.belongsTo( Tasks, { foreignKey: 'idTask' });
    Enterprise.hasMany( Project, {foreignKey: 'idEnterprise'} );
  }
}