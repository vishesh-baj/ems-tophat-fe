import React from "react";
import { DashboardLayout } from "../layout";
import { Table } from "../components";
const EmployeesPage = () => {
  return (
    <DashboardLayout>
      <h1>Employees Page</h1>
      <Table />
    </DashboardLayout>
  );
};

export default EmployeesPage;
