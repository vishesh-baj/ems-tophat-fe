import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import axios from "axios";
const Table = () => {
  const [post, setPost] = useState([]);
  //   const data = [
  //     { name: "abc", age: 12 },
  //     { name: "abd", age: 12 },
  //     { name: "abe", age: 12 },
  //     { name: "abf", age: 12 },
  //   ];
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:5000/dashboard/employee/all", {
  //         headers: {
  //           authorization:
  //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzliMGRhMzNmMzRmY2UyZjZmZGI2ODciLCJpYXQiOjE2NzExOTA5NDQsImV4cCI6MTY3MTI3NzM0NH0.F_OvBv1l3nI3-gKytY2MidncFA4FHF3HOUfv0hHNugI",
  //         },
  //       })

  //       .then((response) => {
  //         setPost(response.data);
  //         console.log("hello", response.data);
  //       });
  //   }, []);

  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/dashboard/employee/all`,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzliMGRhMzNmMzRmY2UyZjZmZGI2ODciLCJpYXQiOjE2NzExOTA5NDQsImV4cCI6MTY3MTI3NzM0NH0.F_OvBv1l3nI3-gKytY2MidncFA4FHF3HOUfv0hHNugI",
        },
      }
    );
    setData(data);
    console.log("data", data);
  };
  useEffect(() => {
    getData();
  }, []);
  //   axios;
  //         .get("http://localhost:5000/dashboard/employee/all", {
  //           headers: {
  //             authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzliMGRhMzNmMzRmY2UyZjZmZGI2ODciLCJpYXQiOjE2NzExOTA5NDQsImV4cCI6MTY3MTI3NzM0NH0.F_OvBv1l3nI3-gKytY2MidncFA4FHF3HOUfv0hHNugI",
  //           },
  //         })

  const columns = [
    {
      title: "id",
      field: "id",
    },
    {
      title: "Name",
      field: "name",
    },
    {
      title: "Email",
      field: "personalEmail",
    },
    {
      title: "phone",
      field: "phone",
    },
  ];

  return (
    <div>
      <MaterialTable
        title={"employee table"}
        data={data.result}
        columns={columns}
        options={{
          search: true,
          //   filtering: true,
        }}
      />
    </div>
  );
};

export default Table;
