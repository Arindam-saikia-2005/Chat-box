import Login from "./components/Login";
import SignUp from "./components/SignUp";
import useAuth from "./context/AuthProvider";
import Left from "./Home/left/Left";
import Logout from "./Home/left1/Logout";
import Right from "./Home/Right/Right";
import toast, { Toaster } from 'react-hot-toast';
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { authUser } = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      {/* <Loading/> */}
      <Toaster/>
    </>
  );
}

export default App;
