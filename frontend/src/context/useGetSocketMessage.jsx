import { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import useConversation from "../stateManage/useConversation";
import { toast } from "react-hot-toast";

function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { addMessage } = useConversation();

  useEffect(() => {
    if (!socket) return;

    socket.on("newMessage", (newMessage) => {
      addMessage(newMessage);
    });

    socket.on("error", (error) => {
      console.error("Socket error:", error);
      toast.error("Message delivery failed");
    });

    return () => {
      socket.off("newMessage");
      socket.off("error");
    };
  }, [socket, addMessage]);
}

export default useGetSocketMessage;
