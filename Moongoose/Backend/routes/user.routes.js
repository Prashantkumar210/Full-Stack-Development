import express, { Router } from "express"
import { create, delteById, home, readAllUser, readByUserName, updateById } from "../controllers/user.controllers.js"
let userRouter = express(Router())

userRouter.get("/",home)
userRouter.post("/create",create)
userRouter.get("/read", readAllUser)
userRouter.get("/read/:userName",readByUserName)
userRouter.put("/update/:id", updateById)
userRouter.delete("/delete/:id", delteById)


export default userRouter 