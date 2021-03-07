"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize({
    host: process.env.SQL_HOST,
    password: process.env.SQL_PASSWORD,
    username: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
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
