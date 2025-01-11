import React, { useEffect } from "react";
import ChatUser from "./ChatUser.jsx";
import Messages from "./Messages.jsx";
import Type from "./Type.jsx";
import useConversation from "../../stateManage/useConversation.jsx";
import useAuth from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300 flex flex-col h-screen transition-all duration-300 ease-in-out">
      {!selectedConversation ? (
        <NoChat />
      ) : (
        <div className="flex flex-col h-full animate-fadeIn">
          <ChatUser />
          <div className="flex-1 overflow-hidden backdrop-blur-sm bg-opacity-50">
            <Messages />
          </div>
          <Type />
        </div>
      )}
    </div>
  );
};

export default Right;

const NoChat = () => {
  const { authUser } = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center font-bold text-xl">
          Welcome <span>{authUser.user.name}</span>
          <br></br>No chat selected, please start conversation by selecting
          anyone to your contacts
        </h1>
      </div>
    </>
  );
};
