import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";

const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <Navigate to="/" replace /> },
  ]);
};

export default MainRoutes;