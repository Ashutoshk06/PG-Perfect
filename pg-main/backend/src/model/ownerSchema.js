import mongoose from "mongoose";
import jwt from "jsonwebtoken"
const ownerDetails=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"Owner name is required"]
    },
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:[true,"Email must be unique"],
       
    },
    password:{
        type:String,
        required:[true,"Password is reqired"],
        select:false
    },
    phone: { 
        type: String,
        required: [true,"Owner phone number is required"]
    },
    role:{
        type:String
    },
  properties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'property' }],
},{timestamps:true})

ownerDetails.methods={
    jwtToken(){
        return jwt.sign(
            {id:this._id,email:this.email,role:"owner",},
            process.env.JWT_SECRET_CODE,
            {expiresIn:'24h'} 
        )
    }
}


export default mongoose.model("owner",ownerDetails)