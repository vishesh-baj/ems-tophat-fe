import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";
import * as yup from "yup";
import axios from "axios";

const RegisterPage = () => {
  const schema = yup.object({
    userName: yup
      .string()
      .min(3, "username nust be atleast 3 characters")
      .required("username is required"),
    email: yup
      .string()
      .email("enter valid email")
      .required("email is required"),
    password: yup
      .string()
      .min(6, "password must be atleast 6 characters")
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    const registerData = {
      name: data.userName,
      email: data.email,
      password: data.password,
    };
    const response = await axios.post(
      "http://localhost:5000/register",
      registerData
    );
    console.log(response);
    console.log(registerData);
  };
  return (
    <>
      <div className="w-screen h-screen flex">
        <div className="w-3/4 h-full  hidden md:flex relative">
          <div className="absolute top-5 left-5">
            <h1>
              <span className="text-red-600 font-extrabold">Top</span>hat
              Software
            </h1>
          </div>
        </div>
        <div className="w-full md:w-1/4 h-full bg-primary flex p-5 justify-center items-center relative">
          <div className="absolute md:hidden top-5 left-5">
            <h1>
              <span className="text-red-600 font-extrabold">Top</span>hat
              Software
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-2"
          >
            <h1 className="text-4xl font-extrabold">Register</h1>
            <input
              {...register("userName")}
              name="userName"
              type="text"
              placeholder="Username"
              className="input input-bordered mb-2"
            />
            <p className="text-red-600">{errors.userName?.message}</p>
            <input
              {...register("email")}
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered mb-2"
            />
            <p className="text-red-600">{errors.email?.message}</p>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="Password"
              className="input input-bordered mb-2"
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <input
              {...register("confirmPassword")}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered mb-2"
            />
            <p className="text-red-600">{errors.confirmPassword?.message}</p>
            <div className="flex justify-between cursor-pointer px-2">
              <span className="text-sm md:text-neutral">
                <NavLink to={PATHS.loginPage}>already have an account?</NavLink>
              </span>
              <span className="text-sm md:text-neutral">
                <NavLink to="/">forget password</NavLink>
              </span>
            </div>
            <button type="submit" className="btn btn-secondary w-1/2">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
