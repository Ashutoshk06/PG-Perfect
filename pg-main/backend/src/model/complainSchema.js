import mongoose from "mongoose";
const complaintSchema = new mongoose.Schema({
    guest: { type: mongoose.Schema.Types.ObjectId, ref: 'guest' },
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'property', required: true },
   
    type: {
      type: String,
      enum: ['cleaning', 'food', 'maintenance', 'noise', 'other'],
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    photos: [{ public_id:{type:String},
               secure_url:{type:String}
            }],
    status: { type: String, default: 'Pending' }, //  Pending, Resolved
    resolvedByOwner: { type: Boolean, default: false },
    // approvedByGuest: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    resolvedAt: { type: Date },
  });
  
  export default mongoose.model('complaint', complaintSchema);

  