import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../layout";
const DashboardHomePage = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <DashboardLayout>
        <h1>Dashboard</h1>
      </DashboardLayout>
    </>
  );
};

export default DashboardHomePage;
