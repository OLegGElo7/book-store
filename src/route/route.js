import AboutStore from "../pages/AboutStore";
import HomePage from "../pages/HomePage";
import Error from "../pages/Error";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  { path: "/About", element: <AboutStore /> },
  { path: "/Home", element: <HomePage /> },
  { path: "/error", element: <Error /> },
  { path: "/*", element: <Navigate to="/error" /> },
];
