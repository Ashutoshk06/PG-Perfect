import app from "./app.js";
import connection from "./src/config/dbConnect.js";
import cloudinary from "cloudinary"
import Razorpay from "razorpay"

connection()
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})


export const instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY_ID, 
    key_secret: process.env.RAZORPAY_SECRET_KEY })

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http:\\localhost:${process.env.PORT}`);
})