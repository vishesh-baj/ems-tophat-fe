import React from "react";
import { Sidebar, Table } from "../components";

const DashboardPage = () => {
  return (
    <div className="w-screen h-screen">
      <h1>Dashboard Page</h1>
      <Sidebar />
      <Table />
    </div>
  );
};

export default DashboardPage;
