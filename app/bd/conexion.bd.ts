import { Sequelize, Model, DataTypes } from 'sequelize';

export const sequelize = new Sequelize({
    host: '127.0.0.1',
    password: '',
    username: 'root',
    port: 3306,
    database: 'castor',
    dialect: 'mysql',
});