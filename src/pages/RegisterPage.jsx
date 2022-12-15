import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { useState } from "react";

const RegisterPage = () => {
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
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-4xl font-extrabold">Register</h1>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered mb-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered mb-2"
            />
            <input
              type="text"
              placeholder="Password"
              className="input input-bordered mb-2"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="input input-bordered mb-2"
            />
            <div className="flex justify-between cursor-pointer px-2">
              <span className="text-sm md:text-neutral">
                <NavLink to={PATHS.loginPage}>already have an account?</NavLink>
              </span>
              <span className="text-sm md:text-neutral">
                <NavLink to="/">forget password</NavLink>
              </span>
            </div>
            <button className="btn btn-secondary w-1/2">Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
