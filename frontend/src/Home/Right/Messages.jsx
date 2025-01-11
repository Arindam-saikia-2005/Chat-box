import React, { useEffect, useRef } from "react";
import useGetMessage from "../../context/useGetMessage.jsx";
import Loading from "../../components/Loading.jsx";
import Message from "./Message.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="h-full overflow-y-auto px-4 py-4">
      {loading ? (
        <Loading />
      ) : Array.isArray(messages) && messages.length > 0 ? (
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessageRef}>
            <Message msg={msg} />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400 text-lg">
            No messages yet. Start the conversation!
          </p>
        </div>
      )}
    </div>
  );
};

export default Messages;
