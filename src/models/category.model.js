import { DataTypes } from "sequelize"
import sequelize from "../config/db-config"

const Category=sequelize.define(
    'Category',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    }
)
export default Category