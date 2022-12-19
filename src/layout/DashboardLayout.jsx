import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FcContacts, FcHome, FcCustomerSupport } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-screen h-screen bg-teal-500 flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <div className="bg-black w-full h-full pt-6 pl-16 md:pl-5 text-sm md:text-lg  z-0">
          Welcome! User
          {children}
        </div>

        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden absolute top-5 left-5"
        >
          <RxHamburgerMenu className="cursor-pointer" size={30} />
        </label>
        <div className="absolute right-5 top-5">
          <CiLogout
            size={30}
            className="cursor-pointer"
            onClick={handlelogout}
          />
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="z-1 menu w-20 md:w-auto px-1 bg-gray-900 text-base-content flex flex-col justify-center items-center gap-1">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                isActive
                  ? `btn btn-square btn-ghost flex items-center justify-center w-full h-full bg-info tooltip tooltip-up`
                  : `btn btn-square btn-ghost flex items-center justify-center w-full h-full tooltip tooltip-up`
              }
              data-tip="Home"
            >
              <FcHome size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/employees"
              className={({ isActive }) =>
                isActive
                  ? `btn btn-square btn-ghost flex items-center justify-center w-full h-full bg-info tooltip tooltip-right`
                  : `btn btn-square btn-ghost flex items-center justify-center w-full h-full tooltip tooltip-right`
              }
              data-tip="Employees"
            >
              <FcContacts size={30} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/candidates"
              className={({ isActive }) =>
                isActive
                  ? `btn btn-square btn-ghost flex items-center justify-center w-full h-full bg-info`
                  : `btn btn-square btn-ghost flex items-center justify-center w-full h-full`
              }
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
