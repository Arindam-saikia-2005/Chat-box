import { createContext, useContext, useEffect, useState } from "react";
import useAuth from "./AuthProvider.jsx";
import io from "socket.io-client";

const socketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUser, setOnlineUser] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:5000/", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
      socket.on("getonline", (users) => {
        setOnlineUser(users);
        console.log("Socket disconnected");
      });
      return () => socket.close();
    } else {
      if(socket) {
        socket.close();
        setSocket(null)
      }
    }
  }, [authUser]);

  return (
    <socketContext.Provider value={{ socket,onlineUser }}>
      {children}
    </socketContext.Provider>
  );
};

export const useSocketContext = () => {
  return useContext(socketContext)
}
