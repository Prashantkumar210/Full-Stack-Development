import mongoose from "mongoose";

const connectDb = async()=>{
    try{ 
        await mongoose.connect(process.env.MONGODB_URl)
        console.log("DataBase Connect");
    }
    catch(error){
        console.log("DB error :", error);
    }
}

export default connectDb