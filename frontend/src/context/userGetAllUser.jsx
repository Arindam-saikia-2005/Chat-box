import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function userGetAllUser() {
  const [allUser, setAllUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get("/api/user/getUserProfile", {
          credentials: "include",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllUser(response.data.filteredUsers);
      } catch (error) {
        console.error("Error in userGetAllUser:", error);
        setAllUser([]);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, []);

  return { allUser, loading };
}

export default userGetAllUser;
