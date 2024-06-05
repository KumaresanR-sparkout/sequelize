import { DataTypes } from "sequelize"
import sequelize from "../config/db-config"

const User = sequelize.define(
    'User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}
)
export default User