import { Sequelize } from 'sequelize';
import { environment } from '../../environments/environment'

export const sequelize = new Sequelize({
    host: environment.SQL_HOST,
    password: environment.SQL_PASSWORD,
    username: environment.SQL_USER,
    database: environment.SQL_DATABASE,
    dialect: 'mysql',
    define: {
        timestamps: false,
    }
});
sequelize.authenticate().then( value => {
    console.log("authenticate BD OK")
})
.catch( value => {
    console.log("authenticate BD Error", value)
})