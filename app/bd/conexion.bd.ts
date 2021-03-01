import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
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
sequelize.authenticate().then( value => {
    console.log("authenticate OK")
})
.catch( value => {
    console.log("authenticate Error")
})