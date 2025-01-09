import React from "react";
import Search from "./Search";
import Users from "./Users";

const Left = () => {
  return (
    <div className="border w-[30%] border-white text-white bg-black">
      <h1 className="font-semibold px-11 items-center text-2xl p-2">Chat</h1>
      <Search />
      <hr></hr>
      <Users/>
    </div>
  );
};

export default Left;
