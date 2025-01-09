import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

function userGetAllUser() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const token = Cookies.get("jwt");
        const response = await axios.get(
          "/api/user/getUserProfile",
          {
            Credentials: "include",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllUsers(response.data.filteredUsers)
        setLoading(false);
      } catch (error) {
        console.log("Error in userGetAllUser" + error);
      }
    };
    getUser()
  }, []);

  return [allUsers, loading]
}

export default userGetAllUser;
