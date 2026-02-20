import User from "../models/user.model.js"
export const home=(req,res)=>{
    res.send("Hello Prashant")
}

export const create = async (req, res)=>{
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
}

export const readAllUser = async (req, res)=>{
    try{
        const users = await User.find()
        // const users = await User.find({name:{$eq :"Prashant_210"}})
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
}

export const readByUserName = async (req, res)=>{
    try{
        const users = await User.findOne({userName:req.params.userName})
        return res.status(200).json(users)
    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
}

export const updateById = async(req, res)=>{
    try{
        let {name,age} = req.body
        let id = req.params.id
        let user = await User.findByIdAndUpdate(id,{name,age},{new:true})
        return res.status(200).json(user)
    }catch(error){
        return res.status(400).json({message:"User not found"})
    }
}

export const delteById = async(req, res)=>{
    try{
        let id = req.params.id;
        let user = await User.findByIdAndDelete(id)
        return res.status(200).json(user)
    }catch(error){
         return res.status(400).json({message:"user not found"})
    }
}