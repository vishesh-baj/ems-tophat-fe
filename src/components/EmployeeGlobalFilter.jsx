import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";

const EmployeeGlobalFilter = ({ filter, setFilter }) => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternativeContactNumber, setAlternativeContactNumber] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [professionalEmail, setProfessionalEmail] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const inputRef = useRef();

  function addEmployee(e) {
    e.preventDefault();

    if (!name) {
      toast.warn("Please fill the name field");
    }

    if (!contactNumber) {
      toast.warn("Please fill your contact number");
    }

    if (!personalEmail) {
      toast.warn("Please fill your personal email");
    }

    if (!professionalEmail) {
      toast.warn("Please fill your professional email");
    }

    if (!category || category === "Select employee Category") {
      toast.warn("Please select the Category of employee");
    }

    const data = {
      name,
      contactNumber,
      alternativeContactNumber,
      personalEmail,
      professionalEmail,
      category,
      address,
      password,
    };

    if (contactNumber.length < 10) {
      return toast.warn("Contact Number cannot have less than 10 digits");
    }

    if (
      name &&
      contactNumber &&
      personalEmail &&
      professionalEmail &&
      category &&
      category !== "Please select the Category of employee"
    ) {
      axios
        .post("http://localhost:8080/dashboard/employee", data, {
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
        <form className="modal-box w-11/12 max-w-5xl" onSubmit={addEmployee}>
          <label
            htmlFor="my-modal-5"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ???
          </label>

          <label>Name</label>
          <input
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="Alin Kensberg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Contact Number</label>
          <input
            type="tel"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="9999 99 9999"
          />

          <label>Alternative Contact Number</label>
          <input
            type="tel"
            value={alternativeContactNumber}
            onChange={(e) => setAlternativeContactNumber(e.target.value)}
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="9999 99 9999"
          />

          <label>Personal Email</label>
          <input
            type="email"
            value={personalEmail}
            onChange={(e) => setPersonalEmail(e.target.value)}
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alin@gmail.com"
          />

          <label>Professional Email</label>
          <input
            onChange={(e) => setProfessionalEmail(e.target.value)}
            value={professionalEmail}
            type="email"
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alin.company@gmail.com"
          />

          <label>Category</label>
          <br />
          <select
            className="w-full outline-none rounded-md p-1 mb-4"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select employee Category</option>
            <option>Human resources - (HR)</option>
            <option>Business Development Executive - (BDE)</option>
            <option>Developer</option>
          </select>

          <br />

          <label>Address</label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="31-Northway Socity, Near Amazon Headquarters, Settle"
          />

          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none rounded-md p-1 mb-4"
            placeholder="alinpassword@123"
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
export default EmployeeGlobalFilter;
