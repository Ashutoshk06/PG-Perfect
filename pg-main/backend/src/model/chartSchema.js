import mongoose from "mongoose";

const chartSchema=new mongoose.Schema({
    data:{
        cleaning: { 
            propertyId:{type:String},
            propertyName:{type:String},
            totalCleaning:{type:Number,default:0}
         },
        food: {
            propertyId:{type:String},
            propertyName:{type:String},
            totalFood:{type:Number,default:0}
    },
        maintenance: { 
            propertyId:{type:String},
            propertyName:{type:String},
            totalMaintenance:{type:Number,default:0}
         },
        noise: { 
            propertyId:{type:String},
            propertyName:{type:String},
            totalNoise:{type:Number,default:0}
        },
        other: { 
        propertyId:{type:String},
        propertyName:{type:String},
        totalOther:{type:Number,default:0} 
    },
    }
})
export default mongoose.model("chart",chartSchema)