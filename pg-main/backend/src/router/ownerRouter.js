import express from "express"
import { addGuest, createProperty, createSubscription, deleteProperty, getAllComplains, getAllProperty, getComplainById, getOwnerDetails, getPropertyById, logIn, logOut, resolveComplainByOwner, sendLoginIdToGuest, signUp, updateProperty, varifySubscribtion, getAllSubscription, getPaymentApiKey1 } from "../controller/ownerController.js"
import jwtAuth from "../middleware/ownerMiddleware.js"
import upload from "../middleware/multerMiddleware.js"
import authorizedRoles from "../middleware/commonMiddleware.js"

const ownerRouter=express.Router()
ownerRouter.post("/signup",signUp)
ownerRouter.post("/login",logIn) 
ownerRouter.get("/logout",jwtAuth,logOut)
ownerRouter.get("/getownerinfo",jwtAuth,authorizedRoles("owner"),getOwnerDetails)
ownerRouter.post("/property/add",jwtAuth,authorizedRoles("owner"),upload.array("propertyPhoto",10),createProperty)
ownerRouter.post("/property/update/:propertyId",jwtAuth,authorizedRoles("owner"),upload.array("propertyPhoto",10),updateProperty)
ownerRouter.delete("/property/delete/:propertyId",jwtAuth,authorizedRoles("owner"),deleteProperty)
ownerRouter.get("/property/getproperty/:propertyId",jwtAuth,getPropertyById)
ownerRouter.get("/property/getallproperty",jwtAuth,getAllProperty)

// ownerRouter.post("/property/room/add/:propertyId",jwtAuth,authorizedRoles("owner"),upload.array("roomPhoto",10),addRoom)
// ownerRouter.post("/property/room/update/:roomId",jwtAuth,authorizedRoles("owner"),upload.array("roomPhoto",10),updateRoom)
// ownerRouter.delete("/property/room/delete/:roomId",jwtAuth,authorizedRoles("owner"),deleteRoom)
// ownerRouter.get("/property/room/getroom/:roomId",jwtAuth,getRoomById)
// ownerRouter.get("/property/room/getallroom/:propertyId",jwtAuth,getAllRooms)

ownerRouter.post("/addguest",jwtAuth,addGuest)
ownerRouter.post("/sendlogin/:guestId",jwtAuth,sendLoginIdToGuest)

ownerRouter.get("/allcomplains/:propertyId",getAllComplains)
ownerRouter.get("/complain/:complainId",getComplainById)
ownerRouter.post("/payment/subscribe",createSubscription)
ownerRouter.route("/paymentKey")
.get(jwtAuth,getPaymentApiKey1)
ownerRouter.route("/verify")
.post(jwtAuth,varifySubscribtion)
ownerRouter.route("/getAllSubscription")
.get(jwtAuth,getAllSubscription)
ownerRouter.post("/resolvecomplain/:complainId",jwtAuth,resolveComplainByOwner)

export default ownerRouter