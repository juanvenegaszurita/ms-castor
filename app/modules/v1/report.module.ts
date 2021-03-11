import { ReturnServiceMS } from '../../@models/return-service.model'
import { User } from '../../bd/user.bd';
import { Tasks } from '../../bd/tasks.bd';
import { ReportBarModel, typeValue } from 'app/@models/report.model';
import { Enterprise } from 'app/bd/enterprisse.bd';
import { Project } from 'app/bd/projects.bd';
import { HistoryTasks } from 'app/bd/history-task.bd';

export class ReportModule {
  public async amountUserTask( isAdmin: boolean, idEnterprise: number, anio: string, where: {} ): Promise<ReturnServiceMS<ReportBarModel[]>> {
    const dataReport: ReportBarModel[] = [];
    if( isAdmin ) {
      const data = await User.userProjectTask(idEnterprise, anio, where);
      data.forEach(user => {
        let reportbar: ReportBarModel = {data: [], label: ''};
        const enterprises = user.getDataValue('Enterprise') as Enterprise[];
        enterprises.forEach(enterprise => { 
          reportbar = { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: user.getDataValue('nombre') };
          const projects = enterprise.getDataValue('projects') as Project[];
          projects.forEach(project => {
            const tasks = project.getDataValue('tasks') as Tasks[];
            tasks.forEach(task => {
              const createDate = new Date(task.getDataValue('CREATE_DATE'));
              if( !isNaN(createDate.getTime()) )
                reportbar.data[createDate.getMonth()] ++;
            });
          })

          dataReport.push(reportbar);
        });
      });
    }
    return { payload: dataReport, message: '', code: "200"};
  }
  public async workUserTime( isAdmin: boolean, idEnterprise: number, anio: string, typeValue: typeValue, where: {} ): Promise<ReturnServiceMS<ReportBarModel[]>> {
    const dataReport: ReportBarModel[] = [];
    if( isAdmin ) {
      const data = await User.userProjectTask(idEnterprise, anio, where, true);
      data.forEach(user => {
        let reportbar: ReportBarModel = {data: [], label: ''};
        const enterprises = user.getDataValue('Enterprise') as Enterprise[];
        enterprises.forEach(enterprise => { 
          reportbar = { data: [0,0,0,0,0,0,0,0,0,0,0,0], label: user.getDataValue('nombre') };
          const projects = enterprise.getDataValue('projects') as Project[];
          projects.forEach(project => {
            const tasks = project.getDataValue('tasks') as Tasks[];
            tasks.forEach(task => {
              let tiempo = 0;
              let fechaAnterior: Date | null= null;
              const historytasks = task.getDataValue('historytasks') as HistoryTasks[];
              historytasks.forEach( HT => {
                const createDate = new Date(HT.getDataValue("CREATE_DATE"));
                console.log("createDate", createDate);
                if( !isNaN(createDate.getTime()) ) {
                  if( fechaAnterior === null ) {
                    fechaAnterior = createDate;
                  } else {
                    tiempo = createDate.getTime() - fechaAnterior.getTime();
                  }
                }
                console.log("tiempo 1", tiempo);
              })
              let calculo: number = 1;
              switch (typeValue) {
                case 'seconds': calculo = (1000); break;
                case 'minutes': calculo = (1000 * 60); break;
                case 'hours': calculo = (1000 * 60 * 60); break;
                case 'days': calculo = (1000 * 60 * 60 * 24); break;
              }
              const final = tiempo === 0? tiempo : Math.round(tiempo/calculo);
              console.log("final", final, "  =  "+user.getDataValue('nombre'));

              const createDatetask = new Date(task.getDataValue('CREATE_DATE'));
              if( !isNaN(createDatetask.getTime()) )
                reportbar.data[createDatetask.getMonth()] += final;
            });
          })

          dataReport.push(reportbar);
        });
      });
    }
    return { payload: dataReport, message: '', code: "200"};
  }
}