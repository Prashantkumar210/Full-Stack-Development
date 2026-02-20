import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("DB is Connected")
    }catch(error){

    }
}

export default connectDB

