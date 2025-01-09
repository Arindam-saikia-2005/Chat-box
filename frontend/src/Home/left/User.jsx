import React from "react";
import useConversation from "../../stateManage/useConversation.jsx";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { socket, onlineUser } = useSocketContext();

  const isOnline = onlineUser.includes(user._id);
  const isSelected = selectedConversation?._id === user?._id;

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${
        isSelected ? "bg-slate-700" : ""
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-7  hover:bg-slate-800 cursor-pointer">
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-14 rounded-full">
            <img src="https://tse2.mm.bing.net/th?id=OIP.a6K29ULFYz77aRqcvf5U5QHaLH&pid=Api&P=0&h=180" />
          </div>
        </div>

        <div>
          <h1 className="font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
};

export default User;
