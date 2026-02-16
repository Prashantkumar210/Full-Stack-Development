import express from "express"
const app = express()
const port = 8000;

// // To make a server we need this method
// // app.[http method]("route", callback)

// app.use(express.json())


// app.get("/", (req, res)=>{
//     // res.send("Hello world")
//     // res.send("<h1>Hello world</h1>")
//     res.json({"name":"Prashant Kumar", "class":"5"})
// })

// // app.post("/", (req, res)=>{
// //     res.send("Hello Prashant")
// // })


// app.post("/", (req, res)=>{
//     let body = req.body
//     console.log(body)
//     res.send("Hello Prashant")
// })




// // app.get("/about", (req, res)=>{
// //     res.send("About the Page")
// // })
// // app.get("/contact", (req, res)=>{
// //     res.send("Contact the page")
// // })


// The use of params 
//      --->
let users = [
  {
    "id": 1,
    "name": "Rahul Sharma",
    "age": 28,
    "department": "IT",
    "salary": 45000
  },
  {
    "id": 2,
    "name": "Priya Singh",
    "age": 30,
    "department": "HR",
    "salary": 40000
  },
  {
    "id": 3,
    "name": "Amit Verma",
    "age": 26,
    "department": "Finance",
    "salary": 42000
  },
  {
    "id": 4,
    "name": "Neha Kapoor",
    "age": 29,
    "department": "Marketing",
    "salary": 38000
  },
  {
    "id": 5,
    "name": "Vikram Patel",
    "age": 32,
    "department": "Operations",
    "salary": 50000
  }
]


app.get("/user",(req,res)=>{
    res.json({users})
})

app.get("/user/:id",(req,res)=>{
    let id = req.params.id
    // console.log(id)
    let existinguser = users.find((user)=>(user.id==id))
    if(!existinguser){
        return res.send("User is not Exsit")
    }
    res.json(existinguser)
})

app.get ("/search", (req, res)=>{
    let query = req.query
    res.json(query)
}) 

app.listen(port,()=>{
    console.log(`Server is Started at ${port}`);
})