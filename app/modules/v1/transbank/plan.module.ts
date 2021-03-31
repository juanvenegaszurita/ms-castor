
import { DetailPlanModel } from "../../../@models/detail-plan.model";
import { ReturnServiceMS } from "../../../@models/return-service.model";
import { StatusTransactions } from "../../../@models/transbank/webpayplus/transaction.model";

import { Transbank } from "../../../bd/transbank.bd";
import { EnterprisesPlans } from "../../../bd/enterprises-plans.bd";
import { Plan } from "../../../bd/plan.bd";

export class PlanModule {
  public async details(idEnterprise: number, anio: number): Promise<ReturnServiceMS<DetailPlanModel[]>> {
    try {
      let detailsPlan: DetailPlanModel[] = [];
      const enterprisesPlans = await EnterprisesPlans.detailsPlan(idEnterprise, anio);

      for (const ep of enterprisesPlans) {
        const transbank = await Transbank.findOne({where: {idEnterprise, anio, mes: ep.getDataValue('mes'),status: StatusTransactions.AUTHORIZED}});
        const plan = ep.getDataValue('plan') as Plan;
        const detailPlan: DetailPlanModel = {
          mes: ep.getDataValue('mes'),
          anio: ep.getDataValue('anio'),
          nombreMes: ep.getDataValue('nombreMes'),
          deuda: plan.getDataValue('precio'),
          pagado: ( transbank? true : false ),
          nombrePlan: plan.getDataValue('nombre'),
          idEnterprisesPlans: ep.getDataValue('idEnterprisesPlans'),
        };
        detailsPlan.push( detailPlan );
      };
      
      return { payload: detailsPlan, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async history(idEnterprise: number, idEnterprisesPlans: number): Promise<ReturnServiceMS<Transbank[]>> {
    try {
      const transbank = await Transbank.findAll({
        where: {idEnterprisesPlans, idEnterprise},
        attributes: {exclude: ['jsonTransbank', 'token']},
        order: [['idTransbank', 'DESC']],
      });
      return { payload: transbank, message: "", code: "200" };
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
  public async enterprise(idEnterprise: number): Promise<ReturnServiceMS<Plan | null>> {
    try {
      const hoy = new Date();
      const enterprisesPlans = await EnterprisesPlans.findOne({
        where: {idEnterprise, mes: (hoy.getMonth()+1), anio: hoy.getFullYear()},
        include: [Plan]
      });
      if( enterprisesPlans ) {
        const plan = enterprisesPlans.getDataValue("plan")
        return { payload: plan, message: "", code: "200" };
      } else {
        return { payload: null, message: "", code: "200" };
      }
      
    } catch (error) {
      return { payload: error, message: "", code: "400" };
    }
  }
}