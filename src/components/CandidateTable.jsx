import React, { useEffect, useRef, useState } from "react";
import { useTable, useSortBy, useGlobalFilter, useFilters } from "react-table";
import { useMemo } from "react";
import CandidateGlobalFilter from "./CandidateGlobalFilter";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../constants";
import {
  BsArrowUp,
  BsArrowDown,
  BsFillTrashFill,
  BsPencil,
} from "react-icons/bs";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const CandidateTable = () => {
  const col = [
    {
      Header: "name",
      accessor: "name",
    },
    {
      Header: "email",
      accessor: "email",
    },
    {
      Header: "contact number",
      accessor: "contactNumber",
    },
    {
      Header: "technology",
      accessor: "technology",
    },
    {
      Header: "Experience",
      accessor: "yearOfExperience",
    },
    {
      Header: "notice period",
      accessor: "noticePeriod",
    },
    {
      Header: "communication",
      accessor: "communication",
    },
    {
      Header: "status",
      accessor: "status",
    },
    {
      Header: "interviewer name",
      accessor: "interviewerName",
    },
    {
      Header: "note",
      accessor: "note",
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
      Cell: (props) => (
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
  const [apiData, setApiData] = useState([]);
  const [editableData, setEditableData] = useState([]);

  // Modal fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [technology, setTechnology] = useState("");
  const [experience, setExperience] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [communication, setCommunication] = useState("");
  const [status, setStatus] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [note, setNote] = useState("");

  const getData = async () => {
    const response = await axios.get(`${BASE_URL}/dashboard/candidate/all`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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
          .delete(`http://localhost:5000/dashboard/candidate/delete/${id}`, {
            headers: {
              authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            swal("Candidate Deleted Successfully", {
              icon: "success",
            });
            getData();
          });
      }
    });
  }

  function editHandler(id) {
    console.log(id);
    localStorage.setItem("id", id);
    console.log(apiData);
    data.filter((item) => item._id === id).map((data) => setEditableData(data));
  }

  function finalEdit(e) {
    e.preventDefault();
    const id = localStorage.getItem("id");

    if (!name) {
      toast.warn("Name field cannot be empty");
    }

    if (!email) {
      toast.warn("Email field cannot be empty");
    }

    if (!contactNumber) {
      toast.warn("Contact Number cannot be empty");
    }

    if (contactNumber.length < 10) {
      toast.warn("Contact Number cannot have less than 10 digits");
    }

    if (!technology) {
      toast.warn("Technology cannot be empty");
    }

    const data = {
      name,
      email,
      contactNumber,
      technology,
      experience,
      noticePeriod,
      communication,
      status,
      interviewerName,
      note,
    };

    if (name && email && contactNumber && technology) {
      axios
        .put(`http://localhost:5000/dashboard/candidate/update/${id}`, data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success(res.data.message);
            getData();
            return (inputRef.current.checked = false);
          }
          if (res.status === 203) {
            return toast.warn(res.data.message);
          }
        });
    }
  }

  useEffect(() => {
    setName(editableData.name);
    setEmail(editableData.email);
    setContactNumber(editableData.contactNumber);
    setTechnology(editableData.technology);
    setExperience(editableData.yearOfExperience);
    setNoticePeriod(editableData.noticePeriod);
    setCommunication(editableData.communication);
    setStatus(editableData.status);
    setInterviewerName(editableData.interviewerName);
    setNote(editableData.note);
  }, [editableData]);

  const inputRef = useRef();
  return (
    <div className="container">
      <CandidateGlobalFilter
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
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
                          if (cell.column.Header === "Delete") {
                            return deleteHandler(cell.row.original._id);
                          }

                          if (cell.column.Header === "Edit") {
                            console.log("Edit >>> ", cell.row.original._id);
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
            type="text"
          />

          <label>Email</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@gmail.com"
          />

          <label>Contact Number</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="1234 56 7890"
          />

          <label>Technology</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="React JS"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
            type="text"
          />

          <label>Experience</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="2 years"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            type="text"
          />

          <label>Notice Period</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="45 days"
            value={noticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
            type="text"
          />

          <label>Communication</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="Excellent"
            value={communication}
            onChange={(e) => setCommunication(e.target.value)}
            type="text"
          />

          <label>Status</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="Completed Screening Round"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            type="text"
          />

          <label>Interviewer Name</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="Ansh"
            value={interviewerName}
            onChange={(e) => setInterviewerName(e.target.value)}
            type="text"
          />

          <label>Note</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-3"
            placeholder="john@123"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            type="He's can do better"
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
export default CandidateTable;
