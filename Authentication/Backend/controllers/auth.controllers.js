import User from "../model/user.model.js"
import bcrypt from "bcryptjs"


export const signUp =async(req,res)=>{
    try{
        
        const {firstName,lastName,email,password,userName} = req.body

        if(!firstName || !lastName || !email || !password || !userName){
            return res.status(400).json({messaage:"send all details"})
        }

        let existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({messaage:"user already exist"})
        }

        const hassedPasswrd = await bcrypt.hash(password, 10)

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hassedPasswrd
        })
        return res.status(200).json({user:{
            firstName,
            lastName,
            userName,
            email,
        }})
    }catch(error){
        return res.status(500).json({messaage:"Internal Server Error"})
    }
}