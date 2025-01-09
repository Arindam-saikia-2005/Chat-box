import axios from "axios";
import React, { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState(false);

  const handleLogOut = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messanger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logout successfully!")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border w-[4%] text-white border-white bg-slate-950 flex flex-col justify-end">
      <div className="p-3">
        <form action="">
          <div className="flex space-x-3">
            <button onClick={handleLogOut}>
              <MdOutlineLogout className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Logout;
