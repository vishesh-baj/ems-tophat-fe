const col = [
  {
    Header: "name",
    accessor: "name",
  },
  {
    Header: "contact Number",
    accessor: "contactNumber",
  },
  {
    Header: "Alt Contact Number",
    accessor: "alternativeContactNumber",
  },
  {
    Header: "Personal Email",
    accessor: "personalEmail",
  },
  {
    Header: "professional email",
    accessor: "professionalEmail",
  },
  {
    Header: "address",
    accessor: "address",
  },
  {
    Header: "password",
    accessor: "password",
  },
  {
    Header: "",
    accessor: "DEL",
    Cell: () => <h1>DEL</h1>
  }
];
export default col;
