import React, { useEffect } from "react";
import ChatUser from "./ChatUser.jsx";
import Messages from "./Messages.jsx";
import Type from "./Type.jsx";
import useConversation from "../../stateManage/useConversation.jsx";
import useAuth from "../../context/AuthProvider.jsx";

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return setSelectedConversation(null)
  }, []);

  console.log(selectedConversation);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChat />
        ) : (
          <>
            <ChatUser />
            <div
              className="py-2 flex-arindam overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
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
          <br></br>No chat selected, please start conversation by selecting anyone to
          your contacts
        </h1>
      </div>
    </>
  );
};
