import React, { useContext, useEffect } from "react";
import { Sidebar, Navbar } from "../components/";
import { AppContext } from "../contexts/AppContext";
const DashboardLayout = ({ children }) => {
  const { darkMode, isCollapsed } = useContext(AppContext);
  useEffect(() => {
    const body = document.body;
    const systemDefault = localStorage.getItem("theme");
    if (systemDefault) {
      body.removeAttribute("data-theme");
      body.setAttribute("data-theme", systemDefault);
    }
    return darkMode
      ? body.setAttribute("data-theme", "night")
      : body.setAttribute("data-theme", "cupcake");
  }, [darkMode]);
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className={` w-full ${isCollapsed ? `md:w-full` : `md:w-3/4`}`}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
