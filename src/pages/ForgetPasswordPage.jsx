import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      return toast.warn("Email cannot be empty");
    }

    axios.post("http://localhost:5000/sendOtp", { email }).then((res) => {
      if (res.status === 203) {
        return toast.warn(res.data.message);
      }
      if (res.status === 200) {
        toast.success(res.data.message);
        return setOtpSent(true);
      }
    });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    if (!otp) {
      return toast.warn("Please enter your OTP");
    }
    if (!password) {
      return toast.warn("Please fill your password");
    }
    if (!confirmPassword) {
      return toast.warn("Please fill your confirm password");
    }
    if (password !== confirmPassword) {
      return toast.warn("Password and confirm password should be equal");
    }

    const data = {
      email,
      code: otp,
      password,
    };

    axios
      .post("http://localhost:5000/resetPassword", data)
      .then((res) => console.log(res));
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

        <form className="flex flex-col w-full gap-2" onSubmit={submitHandler}>
          <h1 className="text-4xl font-extrabold">Forget Password</h1>

          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            disabled={otpSent ? true : false}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered"
          />

          {!otpSent && (
            <button type="submit" className="btn btn-secondary w-1/2">
              Send OTP
            </button>
          )}

          {otpSent && (
            <div>
              <input
                name="OTP"
                type="tel"
                placeholder="One Time Password"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="input input-bordered w-full"
              />
              <p className="text-red-800">OTP will expire in 3 minutes</p>

              <input
                name="password"
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered w-full mb-2"
              />

              <input
                name="confirm password"
                type="text"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input input-bordered w-full mb-2"
              />

              <button
                type="submit"
                onClick={resetPassword}
                className="btn btn-secondary w-1/2"
              >
                Change Password
              </button>
            </div>
          )}
        </form>
      </div>
      <ToastContainer limit={1} />
    </div>
  );
};

export default ForgetPasswordPage;
