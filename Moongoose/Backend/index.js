import express from "express"
import mongoose from "mongoose"
import User from "./models/user.model.js"
const app = express()
const mongoUrl = "mongodb+srv://prashant133191_db_user:prashant123@cluster0.dy9kxak.mongodb.net/prashantbhai"

// middle ware to retrieve the data from user 
app.use(express.json())

const connectDb = async()=>{
    try{ 
        await mongoose.connect(mongoUrl)
        console.log("DataBase Connect");
    }
    catch(error){
        console.log("DB error :", error);
    }
}

const port = 8000


app.post("/create", async (req, res)=>{
    try{
        let {name,age,email,userName} = req.body
        const newUser = await User.create({
            name,
            age, 
            email,
            userName
        })

        return res.status(201).json({message:"User Created"})
    }catch(error){
        return res.status(400).json({message:error})
    }
})

app.get("/read", async (req, res)=>{
    try{
        // /* const users = await User.find() */
        const users = await User.find({name:{$eq :"Prashant_210"}})
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
})

app.get("/read/:userName", async (req, res)=>{
    try{
        const users = await User.findOne({userName:req.params.userName})
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
})

app.listen(port,()=>{
    connectDb()
    console.log(`Server is Started on ${port}`)
})