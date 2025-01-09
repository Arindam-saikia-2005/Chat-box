import React from "react";

const Message = ({ msg = [] }) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  const itsme = msg?.senderId === authUser?.user?._id;
  const chatName = itsme ? "chat-end" : "chat-start";
  const chatColor = itsme ? "bg-blue-500" : "";

  const createdAt = new Date(msg.createdAt);
  const formatedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div 
            className={`chat-bubble text-white chat-bubble-error ${chatColor}`}
          >
            {msg.message}
          </div>
          <div>
            {formatedTime}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
