"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    host: '127.0.0.1',
    password: '',
    username: 'root',
    port: 3306,
    database: 'castor',
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});
exports.sequelize.authenticate().then(value => {
    console.log("authenticate OK");
})
    .catch(value => {
    console.log("authenticate Error");
});
