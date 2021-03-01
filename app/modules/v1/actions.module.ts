import { ReturnServiceMS } from "../../@models/return-service.model";
import { ActionsModels } from "../../@models/actions.model";
import { Actions } from "../../bd/actions.bd";

export class ActionsModule {
  public async getAllActions(): Promise<ReturnServiceMS<Actions[]>> {
    const action = await Actions.findAll();
    return { payload: action, message: "", code: "200" };
  }
  public async getActions(id: number): Promise<ReturnServiceMS<Actions | null>> {
    const action = await Actions.findByPk(id);
    return { payload: action, message: "", code: "200" };
  }
  public async updateActions( action: ActionsModels ): Promise<ReturnServiceMS<ActionsModels>> {
    const actionUpdate = await Actions.update( action, {where: { idActions: action.idActions }} );
    if( actionUpdate.length > 0 )
      return { payload: action, message: '', code: "200"};
    else
      return { payload: action, message: 'Error al actualziar', code: "200"};
  }
  public async deleteActions(id: number): Promise<ReturnServiceMS<{}>> {
    const actionDelete = await Actions.destroy( {where: { idActions: id }} );
    if( actionDelete > 0 )
      return { payload: {}, message: '', code: "200"};
    else
      return { payload: {}, message: 'Error al Eliminar', code: "200"};
  }
  public async createActions(action: ActionsModels) {
    const actionCreate = await Actions.create( action );
    return { payload: actionCreate, message: "", code: "200" };
  }
}
