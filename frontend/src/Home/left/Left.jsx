import React from "react";
import Search from "./Search";
import Users from "./Users";
import UserMenu from "./UserMenu";

const Left = () => {
  return (
    <div className="w-[30%] bg-gray-900 border-r border-gray-700/50 flex flex-col h-screen">
      <div className="p-4 bg-gray-800/40 backdrop-blur-sm border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Messages
          </h1>
          <UserMenu />
        </div>
        <Search />
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar bg-gradient-to-b from-gray-800/30 to-gray-900/30">
        <Users />
      </div>
    </div>
  );
};

export default Left;
