import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiApple } from "react-icons/ci";
import { FcContacts, FcHome, FcCustomerSupport } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        {children}
        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden absolute top-5 left-5"
        >
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu w-20 md:w-auto px-1 bg-primary text-base-content flex flex-col justify-center items-center gap-1">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/dashboard"
              className="btn btn-square btn-ghost flex items-center justify-center w-full h-full"
            >
              <FcHome size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/employees"
              className="btn btn-square btn-ghost flex items-center justify-center w-full h-full"
            >
              <FcContacts size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/candidates"
              className="btn btn-square btn-ghost flex items-center justify-center w-full h-full"
            >
              <FcCustomerSupport size={30} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
