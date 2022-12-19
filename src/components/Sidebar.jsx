import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiHomeAlt } from "react-icons/bi";
import { BsFileEarmarkPersonFill, BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden absolute top-5 left-5"
        >
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-20 z-[10000]  md:w-auto px-1 bg-primary text-base-content flex flex-col items-center justify-center gap-1">
          {/* <!-- Sidebar content here --> */}
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
