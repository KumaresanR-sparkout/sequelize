import express from 'express'
import * as association from '../sequelizes/association.sequelize'
const router=express.Router()

//@POST
router.post('/category',association.addCategory)
router.post('/product',association.addProduct)
//@GET
router.get('/product',association.getProductDetails)
//@PUT

//@DELETE

export default router