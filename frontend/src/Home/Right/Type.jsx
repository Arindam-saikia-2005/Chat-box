import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.jsx";

const Type = () => {
  const { sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    await sendMessages(message);
    setMessage("");
  };

  return (
    <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg border-t border-gray-700 py-4 px-6 sticky bottom-0">
      <form onSubmit={handleSubmit} className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-gray-700 text-white rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 hover:bg-gray-600"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white rounded-full p-3 transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <IoMdSend className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Type;
