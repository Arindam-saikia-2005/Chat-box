import { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation.jsx";
import axios from "axios";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  console.log(selectedConversation);

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const response = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          console.log("response :", response.data);
          setMessages(response.data.messages);
        } catch (error) {
          console.error("Error in useGetMessage :", error);
        } finally {
          setLoading(false);
        }
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);
  return {
    loading,
    messages: messages || []
  };
}

export default useGetMessage;
