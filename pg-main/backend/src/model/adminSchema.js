import mongoose from "mongoose";

const adminSchema=new mongoose.Schema({
    
    email:{
        type:String,
        require:[true,"Email is required"],
        unique:[true,"Email must be unique"],
    },


})
export default mongoose.model('admin', adminSchema);