import { useEffect, useState } from "react";
import useConversation from "../stateManage/useConversation";
import axios from "axios";
import { toast } from "react-hot-toast";

function useGetMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `/api/message/get/${selectedConversation._id}`
        );

        const messageData = response.data.messages || [];
        setMessages(messageData);
      } catch (error) {
        console.error("Error in useGetMessage:", error);
        toast.error("Failed to fetch messages");
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, [selectedConversation?._id]);

  return { messages, loading };
}

export default useGetMessage;
