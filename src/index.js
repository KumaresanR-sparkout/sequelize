import express from 'express'
import env from 'dotenv'
import { dbConnection } from './config/db-config'
import userRouter from './routes/user.route'
import associationRouter from './routes/association.route'
env.config()
const app=express()

dbConnection()

app.use(express.json())
app.use('/api/sequelize',userRouter)
app.use('/api/sequelize',associationRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server started at port:${process.env.PORT}`)
})



