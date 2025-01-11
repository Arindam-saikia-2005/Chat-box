import React from "react";

const Message = ({ msg }) => {
  const authUser = JSON.parse(localStorage.getItem("messanger"));
  const itsme = msg?.senderId === authUser?.user?._id;

  const formattedTime = new Date(msg.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`flex ${itsme ? "justify-end" : "justify-start"} mb-4 px-4`}
    >
      <div className={`max-w-[75%] ${itsme ? "order-2" : "order-1"}`}>
        <div
          className={`px-4 py-2 rounded-2xl ${
            itsme
              ? "bg-blue-600 text-white rounded-br-none"
              : "bg-gray-700 text-white rounded-bl-none"
          }`}
        >
          <p className="text-sm">{msg.message}</p>
        </div>
        <span
          className={`text-xs text-gray-400 mt-1 ${
            itsme ? "text-right" : "text-left"
          } block`}
        >
          {formattedTime}
        </span>
      </div>
    </div>
  );
};

export default Message;
