import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL, PATHS } from "../constants";
const LoginPage = () => {
  const navigate = useNavigate();
  const isLogged = useRef(false);
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: emails,
      password: passwords,
    };

    axios.post(`${BASE_URL}/login`, data).then((res) => {
      console.log(res);
      if (res.status === 203) {
        return toast.warn(res.data.message);
      }
      if (res.status === 200) {
        isLogged.current = true;

        // Saving token
        localStorage.setItem("token", res.data.token);

        if (localStorage.getItem("token") !== undefined && isLogged) {
          console.log("hii");
          navigate(PATHS.dashboardHome);
          return toast.success(res.data.message);
        }
      }
    });
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-3/4 h-full  hidden md:flex relative">
        <div className="absolute top-5 left-5">
          <h1>
            <span className="text-red-600 font-extrabold">Top</span>hat Software
          </h1>
        </div>
      </div>
      <div className="w-full md:w-1/4 h-full bg-primary flex p-5 justify-center items-center relative">
        <div className="absolute md:hidden top-5 left-5">
          <h1>
            <span className="text-red-600 font-extrabold">Top</span>hat Software
          </h1>
        </div>

        <form className="flex flex-col w-full gap-2" onSubmit={onSubmit}>
          <h1 className="text-4xl font-extrabold">Login</h1>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered"
            onChange={(e) => setEmails(e.target.value)}
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
            onChange={(e) => setPasswords(e.target.value)}
          />

          <div className="flex justify-between cursor-pointer px-2">
            <span>
              <NavLink to={PATHS.register}>create an account</NavLink>
            </span>
            <span>
              <NavLink to={PATHS.forgetPassword}>forget password</NavLink>
            </span>
          </div>
          <button type="submit" className="btn btn-secondary w-1/2">
            Login
          </button>
        </form>
      </div>
      <ToastContainer limit={1} autoClose={1800} />
    </div>
  );
};

export default LoginPage;
