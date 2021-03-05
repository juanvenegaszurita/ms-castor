"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const router_1 = require("./routers/router");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
class App {
    static getApp() {
        //this.app.options('*', this.XHRMethods);
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ limit: '50mb' }));
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        //this.app.use(this.initCors);
        this.app.use(this.errorHandler);
        this.app.use(router_1.Routers.getRouters());
        this.app.use(`*`, this.pathError);
        return this.app;
    }
    static initCors(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    }
    static XHRMethods(req, res) {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.send();
    }
    static pathError(req, res) {
        res.status(400)
            .json({ code: 400, message: "Resource Not Found", payload: null });
    }
    static errorHandler(err, req, res, next) {
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
exports.App = App;
App.app = express_1.default();
