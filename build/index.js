"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app/app");
const index_db_1 = require("./app/bd/index.db");
class Server {
    constructor() {
        this.app = express_1.default();
        index_db_1.IndexBD.init();
        this.createServer();
    }
    createServer() {
        this.app.use(app_1.App.getApp());
        this.app.listen(process.env.PORT, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
        });
    }
}
new Server();
