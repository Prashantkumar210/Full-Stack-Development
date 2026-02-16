import express from "express"
const app = express()
const port = 8000;

// To make a server we need this method
// app.[http method]("route", callback)

app.get("/", (req, res)=>{
    // res.send("Hello world")
    // res.send("<h1>Hello world</h1>")
    res.json({"name":"Prashant Kumar", "class":"5"})

})

app.get("/about", (req, res)=>{
    res.send("About the Page")
})
app.get("/contact", (req, res)=>{
    res.send("Contact the page")
})

app.listen(port,()=>{
    console.log(`Server is Started at ${port}`);
})