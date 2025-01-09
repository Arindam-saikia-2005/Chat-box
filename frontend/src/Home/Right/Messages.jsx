import React, { useEffect, useRef } from "react";
import useGetMessage from "../../context/useGetMessage.jsx";
import Loading from "../../components/Loading.jsx";
import Message from "./Message.jsx";
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useGetSocketMessage();
  console.log("Messages Array:", messages);
  // console.log(
  //   "Filtered Messages:",
  //   messages.filter((msg) => msg && msg._id)
  // );

  if (!messages || !Array.isArray(messages)) {
    return <p>No messages available</p>;
  }

  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current) {
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }, [messages]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((msg) => (
          <div key={msg._id} ref={lastMessageRef}>
            <Message msg={msg} />;
          </div>
        ))
      )}
      <div style={{ minHeight: "calc(92vh - 8vh)" }}>
        {!loading && messages.length === 0 && (
          <div>
            <p className="text-center font-bold mt-[20%]">Say Hi!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Messages;
