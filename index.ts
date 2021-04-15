import express from 'express';
import { App } from './app/app';
import { IndexBD } from './app/bd/index.db';
import { initializeApp, credential } from 'firebase-admin';
import { environment } from './environments/environment';
import { writeFileSync, statSync } from 'fs';
import { ScheduledTasksModule } from './app/modules/v1/scheduled-tasks.module';

class Server {
  app: express.Application = express();

  constructor() {
    IndexBD.init();
    this.firebaseAdmin();
    this.createServer();
    new ScheduledTasksModule().birthdays("create").then(e => console.log("birthdays OK", e)).catch(e => console.log("birthdays Error", e));
  }
  private firebaseAdmin() {
    const pathFB = __dirname+"/"+environment.PATH_FIREBASE_CASTOR;
    
    try {
      const stats = statSync(pathFB);
      if( !stats.isFile() )
          writeFileSync(pathFB, environment.FIREBASE_CASTOR);
    } catch (error) {
      writeFileSync(pathFB, environment.FIREBASE_CASTOR);
    }

    try {
      const serviceAccount = require(pathFB);
      initializeApp({
        credential: credential.cert(serviceAccount)
      });
      console.log("Firebase OK");
    } catch (error) {
      console.log("Firebase ERROR", error);
    }
  }
  createServer() {
    this.app.use( App.getApp() );
    this.app.listen(process.env.PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
    });
  }
}
new Server();