import React, { useEffect, useRef, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { useMemo } from "react";
import GlobalFilter from "./GlobalFilter";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  BsArrowUp,
  BsArrowDown,
  BsFillTrashFill,
  BsPencil,
} from "react-icons/bs";
import swal from "sweetalert";

const Table = () => {
  const [apiData, setApiData] = useState([]);
  const [editableData, setEditableData] = useState([]);
  const attendence = useRef();

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
      Header: "Attendence",
      accessor: "attendence",
      Cell: () => (
        <div className="flex w-full h-full items-center justify-center gap-2">
          <select
            className="p-2 rounded-lg"
            onChange={(e) => (attendence.current = e.target.value)}
          >
            <option>Select</option>
            <option>Absent</option>
            <option>Present</option>
            <option>Work from Home</option>
          </select>
          <button className="btn btn-sm" onClick={markAttendenceHandler}>
            Mark
          </button>
        </div>
      ),
    },
    {
      Header: "Delete",
      accessor: "delete",
      Cell: () => (
        <div className="flex w-full h-full items-center justify-center">
          <BsFillTrashFill size={20} className="cursor-pointer" />
        </div>
      ),
    },
    {
      Header: "Edit",
      accessor: "edit",
      Cell: () => (
        <div className="flex w-full h-full items-center justify-center">
          {/* <BsPencil size={20} className='cursor-pointer'/> */}

          {/* The button to open modal */}
          <label htmlFor={"my-modal-3"} className="btn">
            <BsPencil />
          </label>
        </div>
      ),
    },
  ];

  // Modal fields
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternativeContactNumber, setAlternativeContactNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [professionalEmail, setProfessionalEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  function markAttendenceHandler() {
    const data = localStorage.getItem("pd").split(",");
    const atce = attendence.current;
    const finalData = {
      userId: data[0],
      name: data[1],
      email: data[2],
      attendence: atce,
      time: Date.now(),
    };

    axios
      .post("http://localhost:5000/dashboard/employee/attendence", finalData, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 203) {
          return toast.warn(res.data.message);
        }
        return toast.success(res.data.messge);
      });
  }

  const getData = async () => {
    const response = await axios.get(
      "http://localhost:5000/dashboard/employee/all",
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setApiData(response.data.result);
  };

  // Getting api data
  useEffect(() => {
    getData();
  }, []);

  const data = useMemo(() => {
    return apiData;
  }, [apiData]);

  const columns = useMemo(() => col, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },

    useGlobalFilter,
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;
  const { globalFilter } = state;

  function deleteHandler(id) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((res) => {
      if (res) {
        axios
          .delete(`http://localhost:5000/dashboard/employee/delete/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            swal("Employee Deleted Successfully", {
              icon: "success",
            });
            getData();
          });
      }
    });
  }

  function editHandler(id) {
    console.log(data);
    localStorage.setItem("id", id);
    data.filter((item) => item._id === id).map((data) => setEditableData(data));
  }

  function finalEdit(e) {
    e.preventDefault();
    const id = localStorage.getItem("id");

    if (!name) {
      return toast.warn("Name field cannot be empty");
    }

    if (!contactNumber) {
      return toast.warn("Contact field cannot be empty");
    }

    if (!personalEmail) {
      return toast.warn("Personal Email field cannot be empty");
    }

    if (!professionalEmail) {
      return toast.warn("Professional Email field cannot be empty");
    }

    const data = {
      name,
      contactNumber,
      alternativeContactNumber,
      personalEmail,
      professionalEmail,
      address,
      password,
    };

    axios
      .put(`http://localhost:5000/dashboard/employee/update/${id}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        getData();
        localStorage.removeItem("id");
      });
    console.log(data);
    inputRef.current.checked = false;
  }

  useEffect(() => {
    setName(editableData.name);
    setContactNumber(editableData.contactNumber);
    setAlternativeContactNumber(editableData.alternativeContactNumber);
    setPersonalEmail(editableData.personalEmail);
    setProfessionalEmail(editableData.professionalEmail);
    setAddress(editableData.address);
    setPassword(editableData.password);
  }, [editableData]);

  const inputRef = useRef();
  return (
    <div className="container">
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="h-[80vh] overflow-scroll rounded-xl">
        <table className="table w-full" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="sticky top-0"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex justify-between">
                      <div>{column.render("Header")}</div>

                      <div>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <BsArrowDown size={20} />
                          ) : (
                            <BsArrowUp size={20} />
                          )
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        onClick={() => {
                          if (cell.column.Header === "Attendence") {
                            const id = cell.row.original._id;
                            const name = cell.row.original.name;
                            const personalEmail =
                              cell.row.original.personalEmail;
                            const personalDetails = [id, name, personalEmail];
                            localStorage.setItem("pd", personalDetails);
                          }

                          if (cell.column.Header === "Delete") {
                            return deleteHandler(cell.row.original._id);
                          }

                          if (cell.column.Header === "Edit") {
                            editHandler(cell.row.original._id);
                          }
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="my-modal-3"
        className="modal-toggle"
        ref={inputRef}
      />
      <div className="modal">
        <form className="modal-box relative" onSubmit={finalEdit}>
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <label>Name</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John"
          />

          <label>Contact Number</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            type="tel"
            placeholder="1234 56 7890"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <label>Alternative Contact Number</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            type="tel"
            placeholder="1234 56 7890"
            value={alternativeContactNumber}
            onChange={(e) => setAlternativeContactNumber(e.target.value)}
          />

          <label>Personal Email</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="john@gmail.com"
            type="email"
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
          />

          <label>Professional Email</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="john.company@gmail.com"
            type="email"
            value={professionalEmail}
            onChange={(e) => setProfessionalEmail(e.target.value)}
          />

          <label>Address</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="Near Amazon Headquator, Washington"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label>Password</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="john@123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="btn btn-primary btn-block"
            type="submit"
            htmlFor="my-modal-3"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Table;
