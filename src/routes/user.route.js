import express from 'express'
import * as user from '../sequelizes/user-sequelize'
const router=express.Router()

//@POST
router.post('/user',user.insertUser)
//@GET
router.get('/user',user.getUser)
//@PATCH
router.patch('/user',user.updateUser)
//@DELETE
router.delete('/user',user.deleteUser)

export default router