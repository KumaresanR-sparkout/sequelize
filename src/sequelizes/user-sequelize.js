import sequelize from '../config/db-config'
import User from '../models/User.model'
import * as response from '../utils/response-util'
export const insertUser = async (req, res) => {
    try {
        await sequelize.sync()
        const user=await User.create(req.body)
        //console.log(user.toJSON())
        return response.sendSuccess(res,201,'User Created',user.toJSON())
    }
    catch (error) {
        return response.sendError(res, 500, error.message)
    }
}
export const getUser=async(req,res)=>{
    try{
        
        const id=req.query.id
        if(!id){
            return response.sendError(res,400,'send user id')
        }
        const user=await User.findByPk(id,{
            raw:true
        })
        if(!user){
            return response.sendError(res,404,'No user found this id')
        }
        return response.sendSuccess(res,200,'user details',user)
    }
    catch(error){
        return response.sendError(res,500,error.message)
    }
}

export const updateUser=async(req,res)=>{
    try{
        const userId=req.query.id
        if(!userId){
            return response.sendError(res,400,'pass user id for update')
        }
        const user=await User.update({
            age:25
        },{
            where:{
                id:userId
            },
            raw:true
        })
        return response.sendSuccess(res,201,'User has been updated',user)
    }
    catch(error){
        return response.sendError(res,500,error.message)
    }
}

export const deleteUser=async(req,res)=>{
    try{
        const _id=req.query.id
        if(!_id){
            return response.sendError(res,400,'pass user id for Delete')
        }
        const user=await User.destroy({
            where:{
                id:_id
            },
            raw:true
        })
        return response.sendSuccess(res,200,'User Deleted',user)
    }
    catch(error){
        return response.sendError(res,500,error.message)
    }
}