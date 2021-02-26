import { ReturnServiceMS } from "../../@models/return-service.model";
import { ActionsModels } from "../../@models/actions.model";

export const actions: ActionsModels[] = [
  {
    idActions: 1,
    idTask:1,
    descritions: `1 Este es el detalle de la acción
        2 Este es el detalle de la acción
        3 Este es el detalle de la acción
        4 Este es el detalle de la acción
        5 Este es el detalle de la acción`,
    assignedUser: "Juan Venegas",
    CREATE_DATE: new Date(),
    editable: false,
  },
  {
    idActions: 2,
    idTask:1,
    descritions: "Este es el detalle de la acción",
    assignedUser: "Juan Venegas",
    CREATE_DATE: new Date(),
    editable: false,
  },
  {
    idActions: 3,
    idTask:2,
    descritions: "Este es el detalle de la acción",
    assignedUser: "Juan Venegas",
    CREATE_DATE: new Date(),
    editable: false,
  },
];

export class ActionsModule {
  public async getAllActions(): Promise<ReturnServiceMS<ActionsModels[]>> {
    return { payload: actions, message: "", code: "200" };
  }
  public async getActions(id: number): Promise<ReturnServiceMS<ActionsModels | undefined>> {
    const action: ActionsModels | undefined = actions.find(
      (value) => value.idActions === id
    );
    return { payload: action, message: "", code: "200" };
  }
  public async updateActions( action: ActionsModels ): Promise<ReturnServiceMS<ActionsModels>> {
    actions.forEach((value, index) => {
      if (value.idActions === action.idActions) {
        actions[index] = action;
      }
    });
    return { payload: action, message: "", code: "200" };
  }
  public async deleteActions(id: number): Promise<ReturnServiceMS<{}>> {
    actions.forEach((value, index) => {
      if (value.idActions === id) actions.splice(index, 1);
    });
    return { payload: {}, message: "Eliminado", code: "200" };
  }
  public async createActions(action: ActionsModels) {
    action.idActions = Math.max.apply(Math, actions.map(function(o) { return o.idActions ? o.idActions : 0; }))+1;
    actions.push(action);
    return { payload: action, message: "", code: "200" };
  }
}
