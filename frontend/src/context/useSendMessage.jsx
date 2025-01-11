import { useState } from "react";
import useConversation from "../stateManage/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { selectedConversation, addMessage } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );

      const newMessage = response.data.newMessage;
      addMessage(newMessage);
    } catch (error) {
      console.error("Error in useSendMessages:", error);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessages };
}

export default useSendMessage;
