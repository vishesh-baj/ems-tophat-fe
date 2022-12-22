import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
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

        <form className="flex flex-col w-full gap-2">
          <h1 className="text-4xl font-extrabold">Login</h1>
          <input
            name="email"
            type="text"
            placeholder="Email"
            className="input input-bordered"
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
              <NavLink to="/register">create an account</NavLink>
            </span>
            <span>
              <NavLink to="/">forget password</NavLink>
            </span>
          </div>
          <button
            type="submit"
            className="btn btn-secondary w-1/2"
            onClick={notify}
          >
            Login
          </button>
        </form>
      </div>
      <ToastContainer limit={1} />
    </div>
  );
};

export default LoginPage;
