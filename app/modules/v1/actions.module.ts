import { ReturnServiceMS } from "../../@models/return-service.model";
import { ActionsModels } from "../../@models/actions.model";
import { Actions } from "../../bd/actions.bd";
import { HistoryTasks } from "../../bd/history-task.bd";

export class ActionsModule {
  public async getAllActions(): Promise<ReturnServiceMS<Actions[]>> {
    const action = await Actions.findAll();
    return { payload: action, message: "", code: "200" };
  }
  public async getActions(id: number): Promise<ReturnServiceMS<Actions | null>> {
    const action = await Actions.findByPk(id);
    return { payload: action, message: "", code: "200" };
  }
  public async updateActions( UID: string, action: ActionsModels ): Promise<ReturnServiceMS<ActionsModels>> {
    delete action.editable;
    const actionUpdate = await Actions.update( action, {where: { idActions: action.idActions }} );
    if( actionUpdate.length > 0 ) {
      HistoryTasks.updateActions( UID, action );
      return { payload: action, message: '', code: "200"};
    } else
      return { payload: action, message: 'Error al actualziar', code: "200"};
  }
  public async deleteActions( UID: string, id: number, idTask: number): Promise<ReturnServiceMS<{}>> {
    const actionDelete = await Actions.destroy( {where: { idActions: id }} );
    if( actionDelete > 0 ) {
      HistoryTasks.deleteActions( UID, id, idTask );
      return { payload: {}, message: '', code: "200"};
    } else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createActions( UID: string, action: ActionsModels) {
    delete action.editable;
    const actionCreate = await Actions.create( action );
    action.idActions = parseInt(`${actionCreate.getDataValue('idActions')}`);
    HistoryTasks.createActions( UID, action );
    return { payload: actionCreate, message: "", code: "200" };
  }
}
