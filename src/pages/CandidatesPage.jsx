import React from "react";
import CandidateTable from "../components/CandidateTable";
import { DashboardLayout } from "../layout";

const CandidatesPage = () => {
  return (
    <DashboardLayout>
      <div className="p-5">
        <h1>Candidates Page</h1>
        <CandidateTable />
      </div>
    </DashboardLayout>
  );
};

export default CandidatesPage;
