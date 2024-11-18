import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const guestbookSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4,
      unique: true,
      immutable: true,
    },
    totalPosts: { type: Number, required: true, default: 0 },
    nickname: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Guestbook =
  mongoose.models.Guestbook || mongoose.model("Guestbook", guestbookSchema);
