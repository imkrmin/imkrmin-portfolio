import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0,
  },
  guestbookIdCounter: {
    type: Number,
    default: 0,
  },
});

export const Counter =
  mongoose.models.Counter || mongoose.model("Counter", counterSchema);
