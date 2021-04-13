import express from 'express';
import { App } from './app/app';
import { IndexBD } from './app/bd/index.db';
import { initializeApp, credential } from 'firebase-admin';
import { environment } from './environments/environment';

class Server {
  app: express.Application = express();

  constructor() {
    IndexBD.init();
    this.firebaseAdmin();
    this.createServer();
  }
  private firebaseAdmin() {
    try {
      const firebaseConfig = environment.FIREBASE_CASTOR;
      console.log("firebaseConfig", firebaseConfig);
      const firebaseConfigJSOn = JSON.parse(firebaseConfig.replace(/^\ufeff/g,""));
      console.log("firebaseConfigJSOn", firebaseConfigJSOn)
      initializeApp(firebaseConfigJSOn);
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