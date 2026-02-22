import generateToken from "../config/token.js"
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

        let token;
        try{
            token = generateToken(user._id)
        }catch(error){
            console.log(error)
        }
        
        res.cookie("token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT == "producation",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

        console.log(user)

        return res.status(201).json({user:{
            firstName,
            lastName,
            userName,
            email,
        }})
    }catch(error){
        return res.status(500).json({messaage:"Internal Server Error"})
    }
}


export const login = async (req, res)=>{
    try{
        const {email, password} = req.body
        let existUser = await User.findOne({email})
        if(!existUser){
            return res.status(400).json({messaage:"user does not exist"});
        }
        let match = await bcrypt.compare(password, existUser.password)
        if(!match){
            return res.status(400).json({messaage:"Incorrect Password"})
        }

        let token;
        try{
            token = generateToken(existUser._id)
        }catch(error){
            console.log(error)
        }
        
        res.cookie("token", token, {
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT == "producation",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })

       return res.status(200).json({user:{
            firstName:existUser.firstName,
            lastName:existUser.lastName,
            userName:existUser.userName,
            email:existUser.email
        }})

    }catch(error){
        return res.status(500).json({messaage:"Internal Server login"})
    }
}

export const logOut = async(req, res)=>{
    try{
        res.clearCookie("token")
        return res.status(200).json({messaage:"LogOut Successfully"})
    }catch(error){
        return res.status(500).json({messaage:"Internal Server logOut"})
    }
}