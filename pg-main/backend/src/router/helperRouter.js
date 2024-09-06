import express from "express"
import { getComplaintsDetails, getComplaintsSummary, getComplaintsSummaryByProperty } from "../controller/helperController.js"
import jwtAuth from "../middleware/ownerMiddleware.js"

const helperRouter=express.Router()

helperRouter.get("/complainSummery",jwtAuth,getComplaintsSummary)
helperRouter.get("/complainSummeryByProperty",getComplaintsSummaryByProperty)
helperRouter.get("/getAllComplainsDetailes/:category",jwtAuth,getComplaintsDetails)

export default helperRouter