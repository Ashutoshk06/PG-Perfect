import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNo: { type: String, required: true },
    guestId: { type: String},
  });

  
const propertySchema = new mongoose.Schema({
    owner:{type: String},
    name: { type: String, required: [true,"Property name is required"] },
    discription:{type:String},
    category:{type:String,required:[true,"Property category is required"]},
    address: { type: String, required: [true,"Property address is required"] },
    city: { type: String, required: [true,"City is required"] },
    state: { type: String, required: [true,"State is required"] },
    zipCode: { type: String, required: [true,"zip code is required"] },
    facilities: { type: String }, // Example: ['WiFi', 'Food', 'Laundry']
    property_photos: [{ public_id:{type:String},
                       secure_url:{type:String}
    }], 
    rooms: {
        1: [roomSchema],
        2: [roomSchema],
        3: [roomSchema],
        4: [roomSchema],
        5: [roomSchema],
        6: [roomSchema],
      },

    ratings: [{ guest: { type: mongoose.Schema.Types.ObjectId, ref: 'guest'},
                rating: { type: Number, default: 3 }, // Example: 1 to 5 
}],

complaints: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'complaint',
  },
],
    feedbacks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'feedback' }],
    revenue:   { type: Number, default: 0 },
  },{timestamps:true});
  
  export default mongoose.model('property', propertySchema);
