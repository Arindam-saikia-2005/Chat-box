import mongoose from "mongoose";
import User from "../model/user.js";
import Message from "../model/messanger.model.js";

const conversationSchema = mongoose.Schema(
  {
    participants: [
      // stores the id's of sender and recevier
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
