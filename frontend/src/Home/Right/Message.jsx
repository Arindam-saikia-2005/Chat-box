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
      className={`flex ${itsme ? "justify-end" : "justify-start"} mb-4 group`}
    >
      <div
        className={`max-w-[75%] ${
          itsme ? "order-2" : "order-1"
        } animate-slideIn`}
      >
        <div
          className={`px-4 py-2 rounded-2xl shadow-lg transform transition-all duration-200 hover:scale-[1.02] ${
            itsme
              ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-br-none"
              : "bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-bl-none"
          }`}
        >
          <p className="text-sm leading-relaxed">{msg.message}</p>
        </div>
        <div
          className={`flex items-center gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${
            itsme ? "justify-end" : "justify-start"
          }`}
        >
          <span className="text-xs text-gray-400">{formattedTime}</span>
          {itsme && <span className="text-xs text-blue-400">Delivered</span>}
        </div>
      </div>
    </div>
  );
};

export default Message;
