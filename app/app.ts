import { Routers } from './routers/router';
import express from 'express';
import { Request, Response, NextFunction } from 'express';
import cors from  "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

export class App {
  private static app = express();

  public static getApp() {
    //this.app.options('*', this.XHRMethods);
    this.app.use(express.json({limit: '50mb'}));
    this.app.use(express.urlencoded({limit: '50mb'}));
    this.app.use(helmet());
    this.app.use(cors());
    //this.app.use(this.initCors);
    this.app.use(this.errorHandler);
    this.app.use( Routers.getRouters() );
    this.app.use(`*`, this.pathError);

    this.app.set("view engine", "ejs");
    this.app.use(bodyParser.urlencoded({ extended: true }));
    return this.app;
  }
  private static initCors(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }
  private static XHRMethods(req: Request, res: Response) {
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.send();
  }
  private static pathError(req: Request, res: Response) {
    res.status(400)
      .json({ code: 400, message: "Resource Not Found", payload: null });
  }
  private static errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    if (!err.statusCode)
      err.statusCode = 500;
  
    res.status(err.statusCode).send({
      code: err.statusCode,
      message: err.message,
      payload: null
    });
    next();
  }

}