import { Navigate, useRoutes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const LoginRoutes = () => {
  return useRoutes([
    { path: "/login", element: <LogIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "*", element: <Navigate to="/login" replace /> },
  ]);
};

export default LoginRoutes;