import { environment } from "../../../environments/environment";
import { schedule, ScheduledTask, validate } from "node-cron";
import { ReturnServiceMS } from "../../@models/return-service.model";
import { FirebaseService, TypeNotifications } from '../../services/v1/firebase.service';
import { UserEnterprise } from '../../bd/user-enterprise.bd';
import { User } from "app/bd/user.bd";

let cumpleano!: ScheduledTask;
export class ScheduledTasksModule {

  public async validate( cronExpression: string ): Promise<ReturnServiceMS<any>> {
    const val = validate(cronExpression);
    return { payload: `${val? "Válido" : "Inválido"}`, message: '', code: "200"};
  }
  public async birthdays( status: string ): Promise<ReturnServiceMS<any>> {
    if( cumpleano ) {
      if( status === 'create' ) {
        return { payload: "La tarea ya se encuentra creada", message: '', code: "400"};
      } else if( status === 'start' ) {
        this.logs("ini", "start Jobs Cumpleaño");
        cumpleano.start();
        this.logs("fin");
      } else if( status === 'stop' ) {
        this.logs("ini", "stop Jobs Cumpleaño");
        cumpleano.stop();
        this.logs("fin");
      }
    } else {
      if( status === 'create' ) {
        this.logs("ini", "Se crea Jobs Cumpleaño");
        cumpleano = schedule(environment.CRON_EXPRESSION_BIRTHDAYS, async ()=> await this.createBirthdays(), {timezone: 'America/Santiago'} );
        this.logs("fin");
      } {
        return { payload: "La tarea no se encuenra creada", message: '', code: "400"};
      }
    }
    return { payload: "OK", message: '', code: "200"};
  }
  private logs(type: string, mensaje = "") {
    if (type==="ini") {
      console.log("\n\n\n");
      console.log("***********************");
      console.log("***********************");
      console.log(mensaje);
    } else if (type==="fin") {
      console.log("***********************");
      console.log("***********************");
      console.log("\n\n\n");
    }
  }
  private async createBirthdays() {
    try {
      this.logs("ini", "createBirthdays");
      const birthdays = await UserEnterprise.birthdays();
      birthdays.forEach( userEnterprise => {
        const user = userEnterprise.getDataValue("user") as User;
        FirebaseService.insertNotifications(`${environment.MSN_NOTIF_BIRTHDAYS} ${user.getDataValue("nombre")}`, userEnterprise.getDataValue("idEnterprise"), TypeNotifications.BIRTHDAYS);
      });
      return birthdays;
    } catch (error) {
      console.log("error createBirthdays", error);
    }
    this.logs("fin");
  }
}