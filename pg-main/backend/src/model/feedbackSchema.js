import mongoose from "mongoose";
const feedbackSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'property', required: true },
    guest: { type: Schema.Types.ObjectId, ref: 'guest', required: true },
    feedback: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  });
  
  const Feedback = mongoose.model('feedback', feedbackSchema);
  module.exports = Feedback;