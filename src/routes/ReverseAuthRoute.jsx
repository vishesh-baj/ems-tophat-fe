import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ReverseAuthRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (location.pathname === "/login" && token) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

export default ReverseAuthRoute;
