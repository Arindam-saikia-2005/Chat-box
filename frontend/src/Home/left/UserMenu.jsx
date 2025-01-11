import { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const authUser = JSON.parse(localStorage.getItem("messanger"));

  const handleLogOut = async () => {
    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("messanger");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1.5 rounded-full hover:bg-gray-800 transition-colors group"
      >
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.a6K29ULFYz77aRqcvf5U5QHaLH&pid=Api&P=0&h=180"
          className="w-8 h-8 rounded-full object-cover ring-2 ring-gray-700 group-hover:ring-blue-500 transition-colors"
          alt="Profile"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 py-2 bg-gray-800 rounded-lg shadow-xl animate-fadeIn z-50">
          <div className="px-4 py-2 border-b border-gray-700">
            <p className="text-sm font-medium text-gray-200">
              {authUser?.user?.name}
            </p>
            <p className="text-xs text-gray-400 truncate">
              {authUser?.user?.email}
            </p>
          </div>
          <button
            onClick={handleLogOut}
            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700/50 transition-colors flex items-center gap-2"
          >
            <MdOutlineLogout />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
