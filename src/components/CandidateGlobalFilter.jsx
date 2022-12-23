import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const CandidateGlobalFilter = ({ filter, setFilter }) => {
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

  const inputRef = useRef();

  function addCandidate(e) {
    e.preventDefault();

    if (!name) {
      toast.warn("Please fill the name field");
    }

    if (!email) {
      toast.warn("Please fill your email address");
    }

    if (!contactNumber) {
      toast.warn("Please fill your contact number");
    }

    if (!technology) {
      toast.warn("Please fill technology");
    }

    if (!status) {
      toast.warn("Please select status");
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

    if (contactNumber.length < 10) {
      return toast.warn("Contact Number cannot have less than 10 digits");
    }

    if (name && email && contactNumber && technology && status) {
      axios
        .post("http://localhost:8080/dashboard/candidate", data, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          console.log(res);

          if (res.status === 203) {
            toast.warn(res.data.message);
          }

          if (res.status === 200) {
            toast.success(res.data.message);
            inputRef.current.checked = false;
            location.reload();
          }
        });
    }
  }

  return (
    <div className="w-full flex justify-end mb-5 gap-3">
      {/* Add Employee Button */}
      <label htmlFor="my-modal-5" className="btn">
        Add
      </label>

      {/* Modal */}
      <input
        type="checkbox"
        id="my-modal-5"
        className="modal-toggle"
        ref={inputRef}
      />
      <div className="modal">
        <form className="modal-box w-11/12 max-w-5xl" onSubmit={addCandidate}>
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <label>Name</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="Alin Kensberg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            type="email"
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="9999 99 9999"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Contact Number</label>
          <input
            type="tel"
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="9999 99 9999"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <label>Technology</label>
          <input
            type="text"
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alin@gmail.com"
            value={technology}
            onChange={(e) => setTechnology(e.target.value)}
          />

          <label>Experience</label>
          <input
            type="text"
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alin.company@gmail.com"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />

          <label>Notice Period</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="31-Northway Socity, Near Amazon Headquarters, Settle"
            value={noticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
          />

          <label>Communication</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alinpassword@123"
            value={communication}
            onChange={(e) => setCommunication(e.target.value)}
          />

          <label>Status</label>
          <select
            className="w-full outline-none rounded-md p-1 mb-4"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>Select Status</option>
            <option>New</option>
            <option>HR Round</option>
            <option>First Round</option>
            <option>Second Round</option>
          </select>

          <label>Interviewer Name</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alinpassword@123"
            value={interviewerName}
            onChange={(e) => setInterviewerName(e.target.value)}
          />

          <label>Note</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alinpassword@123"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button className="btn">Submit</button>
        </form>
      </div>

      <input
        className="input input-info"
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
      />
    </div>
  );
};
export default CandidateGlobalFilter;
