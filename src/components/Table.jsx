import React from "react";
import MaterialTable from "material-table";
import { useState, useEffect } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [data]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/dashboard/employee/all`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    setData(data);
    console.log("data", data);
  };

  return <div>Table</div>;
};

export default Table;
