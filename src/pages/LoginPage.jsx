import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useRef } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);
  const isLogged = useRef(false);

  const schema = yup
    .object({
      email: yup
        .string()
        .email("enter valid email")
        .required("email is required"),
      password: yup
        .string()
        .min(6, "password must have minimum of 6 characters")
        .required("password is required"),
    })
    .required();

  const location = useLocation();
  console.log(location);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios.post("http://localhost:8080/login", data).then((res) => {
      if (res.status === 200) {
        // setIsLogged((prev) => setIsLogged(!prev));
        isLogged.current = true;
        console.log(isLogged);
        console.log(res.data);
        // Saving token
        localStorage.setItem("token", res.data.token);
        const localData = localStorage.getItem("token");

        if (localStorage.getItem("token") !== undefined && isLogged) {
          return navigate("/dashboard/home");
        }
      }
    });
  };

  // if (token !== "") {
  //   // Saving token in local storage
  //   localStorage.setItem("dataKey", JSON.stringify(data));
  // }

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
          />
          <p className="text-red-500">{errors.email?.message}</p>
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <p className="text-red-500">{errors.password?.message}</p>
          <div className="flex justify-between cursor-pointer px-2">
            <span>
              <NavLink to="/register">create an account</NavLink>
            </span>
            <span>
              <NavLink to="/">forget password</NavLink>
            </span>
          </div>
          <button type="submit" className="btn btn-secondary w-1/2">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
