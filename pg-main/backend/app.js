import express from "express"
import dotenv from "dotenv"
import errorMiddleware from "./src/middleware/errorMiddleware.js"
import ownerRouter from "./src/router/ownerRouter.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./src/router/userRouter.js"
import helperRouter from "./src/router/helperRouter.js"

const app=express()
dotenv.config()
app.use(express.json()) //Sucessfully allow to send a json data during res.status.json
app.use(cookieParser()) //Sucessfully allow to reed the cookie 
app.use(express.urlencoded({extended:true}))
app.use(cors({
    origin:[process.env.CLIENT_URL],
    credentials:true
})) 

app.use("/ping",(req,res)=>{
    res.send("Pong")
})
app.use("/app/owner",ownerRouter)
app.use("/app/user",userRouter)
app.use("/app/helper",helperRouter)

app.use(errorMiddleware)
export default app