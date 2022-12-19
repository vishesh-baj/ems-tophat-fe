import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div>
      DashboardPage
      <button className="bg-red-900" onClick={handlelogout}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
