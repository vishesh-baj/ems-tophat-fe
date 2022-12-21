import React from "react";
import CandidateTable from "../components/CandidateTable";
import { DashboardLayout } from "../layout";

const CandidatesPage = () => {
  return (
    <DashboardLayout>
      <h1>Candidates Page</h1>
      <CandidateTable />
    </DashboardLayout>
  );
};

export default CandidatesPage;
