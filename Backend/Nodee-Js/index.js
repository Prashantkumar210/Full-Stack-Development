import http from "http" // Hyper text transfer protocol

const port = 8000;
const server = http.createServer((req,res)=>{
   
    if(req.url=="/"){
        res.end("Welcome to home Page")
    }
    else if (req.url=="/about"){
        res.end("Welcome to About Page")
    }
    else if(req.url=="/contact"){
        res.end("Welcome to Contact Us Page")
    }
    else{
        res.end("404 is not found")
    }
})

server.listen(port,()=>{
    console.log("Server is started")
})