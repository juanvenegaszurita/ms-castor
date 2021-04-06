import { Actions } from "./actions.bd";
import { EnterprisesPlans } from "./enterprises-plans.bd";
import { Enterprise } from "./enterprisse.bd";
import { HistoryTasks } from "./history-task.bd";
import { Plan } from "./plan.bd";
import { Project } from "./projects.bd";
import { StatusTasks } from "./status-tasks.bd";
import { Tasks } from "./tasks.bd";
import { Transbank } from "./transbank.bd";
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
    
    UserEnterprise.belongsTo( User, {foreignKey: 'boss', as: 'userBoss'} );

    Project.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    Project.hasMany( Tasks, { foreignKey: 'idProject' });

    Tasks.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    Tasks.hasOne( Project, {foreignKey: 'idProject'});
    Tasks.hasOne( User, {foreignKey: 'UID'});
    Tasks.belongsTo( StatusTasks, {foreignKey: 'idStatus'});
    Tasks.hasMany( Actions, {foreignKey: 'idTask'} )
    Tasks.hasMany( HistoryTasks, {foreignKey: 'idTask'} )

    StatusTasks.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    StatusTasks.hasMany( Tasks, {foreignKey: 'idStatus'});

    Transbank.hasOne( Enterprise, {foreignKey: 'idEnterprise'});
    Transbank.belongsTo( Enterprise, {foreignKey: 'idEnterprise'});
    
    Plan.hasMany( EnterprisesPlans, {foreignKey: 'idplans'});
    EnterprisesPlans.belongsTo( Plan, {foreignKey: 'idplans'});
    ////////////////////////////////////////////////////////////////
    
    HistoryTasks.belongsTo( User, {foreignKey: 'UID'});
    HistoryTasks.belongsTo( Tasks, {foreignKey: 'idTask'});
    Actions.belongsTo( Tasks, { foreignKey: 'idTask' });
    Enterprise.hasMany( Project, {foreignKey: 'idEnterprise'} );
    Enterprise.hasMany( Transbank, {foreignKey: 'idEnterprise'} );
    Enterprise.hasMany( UserEnterprise, {foreignKey: 'idEnterprise'});
    Enterprise.hasMany( EnterprisesPlans, {foreignKey: 'idEnterprise'});
  }
}