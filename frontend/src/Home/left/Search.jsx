import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import userGetAllUser from "../../context/userGetAllUser.jsx";
import useConversation from "../../stateManage/useConversation";
import { toast } from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const { allUser } = userGetAllUser();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search || !allUser) return;

    const conversation = allUser.find((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            className="w-full bg-gray-800/50 text-gray-200 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearchSharp className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        </div>
      </form>
    </div>
  );
};

export default Search;
