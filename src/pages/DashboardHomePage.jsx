import React from "react";
import { DashboardLayout } from "../layout";
const DashboardHomePage = () => {
  return (
    <>
      <DashboardLayout>
        <div className="p-5 ">
          <div className="flex gap-5 w-full">
            <div className="card w-96 bg-base-200 shadow p-4">
              <h1 className="text-4xl">Employees Details</h1>
              <div className="text-2xl">Total Employees: 40</div>
            </div>
            <div className="card flex-1 w-96 bg-base-200 shadow p-4">
              <h1 className="text-4xl">Candidate Details Details</h1>
              <div className="text-2xl">Total Employees: 40</div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardHomePage;
