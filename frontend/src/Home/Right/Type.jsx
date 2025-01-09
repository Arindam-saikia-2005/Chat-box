import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from "../../context/useSendMessage.jsx";

const Type = () => {
  const { sendMessages } = useSendMessage();
  const [message, setMessage] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    await sendMessages(message)
    setMessage("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center h-[8vh] bg-gray-800 px-4">
          {/* Input Field */}
          <input
            type="text"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Type your message..."
            className="flex-grow input input-bordered bg-slate-900 text-white px-4 py-2 rounded-lg outline-none"
          />

          {/* Send Button */}
          <button type="submit" className="ml-2 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white">
            <IoMdSend className="text-2xl" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Type;
