import React from "react";
import { Sidebar, Navbar } from "../components/";
const DashboardLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-base-300 flex">
      <Sidebar />
      <div className="bg-teal-400 grow">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
