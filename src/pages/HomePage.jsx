import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="text-8xl font-extrabold  flex justify-center  my-36">
        <span className="text-red-500">TOP</span>-
        <span className="text-white">HAT</span>
      </div>

      <button
        className=" mx-80   min-w-[50%]  bg-blue-500 hover:bg-blue-700   text-white text-2xl font-bold py-2 px-4 rounded-xl my-2"
        onClick={handlePage}
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;
