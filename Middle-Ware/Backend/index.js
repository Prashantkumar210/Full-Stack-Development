import express from "express"
import cors from "cors"
let app = express()

app.use(express.json())
let password = "prashant123"

app.use((req,res,next)=>{
    if(req.body.pass!=password){
        res.send("Password is not matched")
    }
    next()
})
 
// app.use(cors({
//     "origin":"http://localhost:5173"
// }))
const port = 8000

app.get("/", (req, res)=>{
    res.json({name:"Prashant Kumar", age:21})
})

app.post("/",(req,res)=>{
    console.log(req.body)
    res.send({success:true})
})

app.listen(port, ()=>{
    console.log("Server is started...");
})