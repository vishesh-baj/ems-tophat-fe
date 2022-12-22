import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL, PATHS } from "../constants";
const LoginPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const isLogged = useRef(false);
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");

  const schema = yup
    .object({
      email: yup
        .string()
        .email("enter valid email")
        .required("email is required"),
      password: yup.string().required("password is required"),
    })
    .required();

  const location = useLocation();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (data) => {
    axios.post(`${BASE_URL}/login`, data).then((res) => {
      if (res.status === 200) {
        // setIsLogged((prev) => setIsLogged(!prev));
        isLogged.current = true;
        console.log(isLogged);
        console.log(res.data);
        // Saving token
        localStorage.setItem("token", res.data.token);
        const localData = localStorage.getItem("token");

        if (localStorage.getItem("token") !== undefined && isLogged) {
          return navigate(PATHS.dashboardHome);
        }
      }
    });
  };

  // if (token !== "") {
  //   // Saving token in local storage
  //   localStorage.setItem("dataKey", JSON.stringify(data));
  // }
  const disableButton = (state) => {
    state(true);
    setTimeout(() => {
      state(false);
    }, 2850);
  };

  const notify = () => {
    const isEmailValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(
      emails
    );
    if (!isEmailValid) {
      disableButton(setIsClicked);
      return toast("enter valid email");
    }
    if (passwords.length < 6) {
      disableButton(setIsClicked);
      return toast("password must have minimum of 6 characters");
    }
  };

  useEffect(() => {}, [data]);

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

        <form
          className="flex flex-col w-full gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-4xl font-extrabold">Login</h1>
          <input
            {...register("email")}
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered"
            onChange={(e) => setEmails(e.target.value)}
          />
          <p className="text-red-500">{errors.email?.message}</p>
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
            onChange={(e) => setPasswords(e.target.value)}
          />
          <p className="text-red-500">{errors.password?.message}</p>
          <div className="flex justify-between cursor-pointer px-2">
            <span>
              <NavLink to={PATHS.register}>create an account</NavLink>
            </span>
            <span>
              <NavLink to={PATHS.forgetPassword}>forget password</NavLink>
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-1/2"
            onClick={notify}
            disabled={isClicked}
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer limit={1} autoClose={1800} />
    </div>
  );
};

export default LoginPage;
