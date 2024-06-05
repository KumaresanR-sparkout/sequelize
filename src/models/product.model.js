import { DataTypes } from "sequelize"
import sequelize from "../config/db-config"
import  Category from './category.model'

const Product=sequelize.define(
    'Product',{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
           type:DataTypes.INTEGER,
           allowNull:true 
        }
    }
)

Category.hasMany(Product)
Product.belongsTo(Category)
export default Product