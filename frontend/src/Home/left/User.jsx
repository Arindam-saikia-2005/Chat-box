import React from "react";
import useConversation from "../../stateManage/useConversation.jsx";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(user._id);
  const isSelected = selectedConversation?._id === user?._id;

  return (
    <div
      onClick={() => setSelectedConversation(user)}
      className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-700/50 ${
        isSelected ? "bg-gray-700" : ""
      }`}
    >
      <div className="relative">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.a6K29ULFYz77aRqcvf5U5QHaLH&pid=Api&P=0&h=180"
          className="w-12 h-12 rounded-full object-cover"
        />
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-gray-800" />
        )}
      </div>

      <div className="ml-4 flex-1">
        <h3 className="font-medium text-gray-200">{user.name}</h3>
        <p className="text-sm text-gray-400 truncate">{user.email}</p>
      </div>
    </div>
  );
};

export default User;
