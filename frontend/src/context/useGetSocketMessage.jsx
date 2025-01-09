import  { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../stateManage/useConversation.jsx";

function useGetSocketMessage() {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
        // const notification = new Audio(sound)
      setMessages([...messages, newMessage]);
    });
    return () => socket.off("newMessage");
  }, [socket, messages, setMessages]);
}

export default useGetSocketMessage;
