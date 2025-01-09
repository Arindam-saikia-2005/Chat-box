import Conversation from "../model/conversation.model.js";
import Message from "../model/messanger.model.js";
import { getReceiverSocketId, io } from "../SocketIO/server.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user?._id; //current logged user

    if (!senderId) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    //  Check if a conversation already exist
    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    // If no conversation exists
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // Create a new message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);

    await conversation.save();
    await newMessage.save();
    const recevierSocketId = getReceiverSocketId(receiverId);

    if(recevierSocketId){
      io.to(recevierSocketId).emit("newMessage",newMessage)
    }

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (error) {
    console.log("Error in sending message" + error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: chatUser } = req.params;
    const senderId = req.user?._id; //current logged user
    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, chatUser],
      },
    }).populate("messages");
    if (!conversation) {
      return res.status(201).json({ msg: "No conversation found" });
    }
    const messages = conversation.messages;
    res.status(201).json({ messages });
  } catch (error) {
    console.log("Message getting error" + error);
    res.status(500).json({ error: "Internal server error" });
  }
};
