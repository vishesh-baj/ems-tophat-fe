import React from "react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../constants";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleP = () => {
    navigate(PATHS.login);
  };
  const handlePF = () => {
    navigate(PATHS.dashboardHome);
  };
  return (
    <div>
      <div className="text-2xl font-extrabold  flex justify-center  my-36">
        <div>Oops! You seem to be lost.</div>
        <br />
        <div>Here are some helpful links:</div>
      </div>
      <button
        className="mx-80   min-w-[50%]  bg-blue-500 hover:bg-green-700   text-white text-2xl font-bold py-2 px-4 rounded-xl my-2"
        onClick={handlePF}
      >
        Dashboard
      </button>
      <button
        to={PATHS.login}
        className="mx-80   min-w-[50%]  bg-blue-500 hover:bg-green-700   text-white text-2xl font-bold py-2 px-4 rounded-xl my-2"
        onClick={handleP}
      >
        Login
      </button>
    </div>
  );
};

export default PageNotFound;
