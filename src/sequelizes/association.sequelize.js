import * as response from '../utils/response-util'
import sequelize from '../config/db-config'
import Category from '../models/category.model'
import Product from '../models/product.model'

export const addCategory = async (req, res) => {
    try {
        await sequelize.sync()
        const category = await Category.create(req.body, {
            raw: true
        })
        //console.log(category)
        return response.sendSuccess(res, 201, 'Category has been created', category)
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}

export const addProduct = async (req, res) => {
    try {
        await sequelize.sync()
        const product = await Product.create(req.body, {
            raw: true
        })
        //console.log(product)
        return response.sendSuccess(res, 201, 'Product has been created', product)
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}

export const getProductDetails = async (req, res) => {
    try {
        const productDetails = await Product.findAll({
            include: [{
                model: Category,
                attributes: {
                    exclude: ['id', 'createdAt', 'updatedAt']
                }
            }],
            raw: true,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })
        return response.sendSuccess(res,200,'Product details with category',productDetails)
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}