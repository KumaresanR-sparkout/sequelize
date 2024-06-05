import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('nodesql', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})
export const dbConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Db connected')
    }
    catch (error) {
        console.log('Db connection error')
    }
}

export default sequelize

