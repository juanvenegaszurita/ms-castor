import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize({
    host: process.env.SQL_HOST,
    password: process.env.SQL_PASSWORD,
    username: process.env.SQL_USER,
    database: process.env.SQL_DATABASE,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});
sequelize.authenticate().then( value => {
    console.log("authenticate OK")
})
.catch( value => {
    console.log("authenticate Error")
})