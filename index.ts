import express from 'express';
import { App } from './app/app';
import { IndexBD } from './app/bd/index.db';

class Server {
  app: express.Application = express();
  PORT = 8000;

  constructor() {
    IndexBD.init();
    this.createServer();
  }
  createServer() {
    this.app.use( App.getApp() );
    this.app.listen(this.PORT, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${this.PORT}`);
    });
  }
}
new Server();