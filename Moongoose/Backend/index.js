import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDb from "./config/db.js"
import userRouter from "./routes/user.routes.js"
const app = express()
const port = process.env.PORT || 5000
// middle ware to retrieve the data from user 
app.use(express.json())

app.use("/", userRouter)
app.listen(port,()=>{
    connectDb()
    console.log(`Server is Started on ${port}`)
})