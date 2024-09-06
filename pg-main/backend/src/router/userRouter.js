import express from "express"
import { addComplain, contactAdmin, logOut, loginDashboard, searchProperty, sendEmailToOwner, showAllProperty, updateLogin } from "../controller/guestController.js"
import userjwtAuth from "../middleware/userMiddleware.js"
import upload from "../middleware/multerMiddleware.js"
const userRouter=express.Router()

userRouter.get("/property/search",searchProperty)
userRouter.get("/property/showall",showAllProperty)
userRouter.post("/sendmessage/:propertyId",sendEmailToOwner)
userRouter.post("/login",loginDashboard)
userRouter.post("/updatelogin",userjwtAuth, updateLogin)
userRouter.get("/logout",userjwtAuth,logOut)
userRouter.post("/addcomplain",userjwtAuth,upload.array("photos",10),addComplain)
userRouter.post("/contactadmin",contactAdmin)

export default userRouter