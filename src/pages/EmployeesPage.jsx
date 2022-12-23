import React from "react";
import { DashboardLayout } from "../layout";
import { Table } from "../components";

const EmployeesPage = () => {
  return (
    <DashboardLayout>
      <div className="p-5">
        <h1>Employee page</h1>
        <Table />
      </div>
    </DashboardLayout>
  );
};

export default EmployeesPage;
