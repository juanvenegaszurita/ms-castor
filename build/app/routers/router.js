"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routers = void 0;
const express_1 = require("express");
const v1_1 = require("./v1");
class Routers {
    static getRouters() {
        this.router.use('/v1', v1_1.RouterV1.v1());
        return this.router;
    }
}
exports.Routers = Routers;
Routers.router = express_1.Router();
