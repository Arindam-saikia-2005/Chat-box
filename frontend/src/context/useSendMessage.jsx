
import { useState } from "react";
import useConversation from "../stateManage/useConversation";
import axios from "axios";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);
    if (selectedConversation && selectedConversation._id) {
      try {
        const response = await axios.post(
          `/api/message/send/${selectedConversation._id}`,
          { message }
        );
        console.log("response :", response.data);
        const newMessage = response.data.messages;
        setMessages([...messages, newMessage || []]);
        // setMessages(response.data.messages);
      } catch (error) {
        console.error("Error in useSendMessages :", error);
        setMessages([])
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    loading,
    sendMessages,
  };
}

export default useSendMessage;
