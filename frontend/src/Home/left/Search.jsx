import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import userGetAllUser from "../../context/userGetAllUser.jsx";
import useConversation from "../../stateManage/useConversation";

const Search = () => {
  const [search, setSearch] = useState("");
  const { allUser } = userGetAllUser();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUser.find((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
      if (conversation) {
        setSelectedConversation(conversation);
        setSearch("");
      } else {
        alert("User not found")
      }
    });
  };

  return (
    <div className="h-[10vh]">
      <div className="px-6 py-4">
        <form onSubmit={handleSubmit}>
          <div className="flex space-x-3">
            <label className="border-[1px] rounded-lg flex items-center border-gray-700 bg-slate-900 px-3 gap-2 w-[80%]">
              <input
                type="text"
                className="grow outline-none bg-transparent"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </label>
            <button>
              <IoSearchSharp className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
