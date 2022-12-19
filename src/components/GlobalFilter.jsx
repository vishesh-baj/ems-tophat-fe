import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="w-full flex justify-end mb-5">
      <input
        className="input input-info"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search Employees"
      />
    </div>
  );
};
export default GlobalFilter;
