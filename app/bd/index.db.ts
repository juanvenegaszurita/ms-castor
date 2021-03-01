import { Actions } from "./actions.bd";
import { Enterprise } from "./enterprisse.bd";
import { Project } from "./projects.bd";
import { StatusTasks } from "./status-tasks.bd";
import { Tasks } from "./tasks.bd";
import { User } from "./user.bd";

export class IndexBD {
  static init() {
    Enterprise.belongsToMany(User, {
      as: "User",
      through: "userenterprises",
      foreignKey: "idEnterprise",
    });

    User.belongsToMany(Enterprise, {
      as: "Enterprise",
      through: "userenterprises",
      foreignKey: "UID",
    });

    Project.hasOne(Enterprise, {foreignKey: 'idEnterprise'});

    StatusTasks.hasOne(Enterprise, {foreignKey: 'idEnterprise'});

    Tasks.hasOne(Enterprise, {foreignKey: 'idEnterprise'});
    Tasks.hasOne(Project, {foreignKey: 'idProject'});
    Tasks.hasOne(User, {foreignKey: 'UID'});
    Tasks.hasOne(StatusTasks, {foreignKey: 'idStatus'});
    Tasks.hasMany( Actions, {foreignKey: 'idTask'} )

    Actions.belongsTo(Tasks, { foreignKey: 'idTask' });
    //Actions.hasOne(User, {foreignKey: 'UID'});
    //Actions.hasOne(Tasks, {foreignKey: 'idTask'});
  }
}