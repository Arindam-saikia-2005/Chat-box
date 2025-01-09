import React from "react";
import useConversation from "../../stateManage/useConversation.jsx";
import { useSocketContext } from "../../context/SocketContext.jsx";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  const { onlineUser } = useSocketContext();
  const onlineStatus = (userId) => {
     return onlineUser.includes(userId)?"online":"offline";
  }

  if (!selectedConversation) {
    return (
      <div className="text-center text-white p-6 bg-gray-900">
        No conversation selected
      </div>
    );
  }

  return (
    <>
      <div className="flex space-x-3 p-6 bg-gray-900 hover:bg-gray-600  h-[8vh] pl-5 pt-5 ">
        <div>
          {/* <div className={`avatar ${isOnline ? "online" : ""}`}> */}
          <div className={`avatar online`}>
            <div className="w-14 rounded-full">
              <img src="https://tse2.mm.bing.net/th?id=OIP.a6K29ULFYz77aRqcvf5U5QHaLH&pid=Api&P=0&h=180" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.name}</h1>
          <span className="text-sm">{onlineStatus(selectedConversation._id)}</span>
        </div>
        ;
      </div>
    </>
  );
};

export default ChatUser;
