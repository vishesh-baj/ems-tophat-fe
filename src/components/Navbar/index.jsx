import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  TbLayoutSidebarRightExpand,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";
const Navbar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    console.log("Login");
    navigate(PATHS.login);
  };

  return (
    <div className="navbar flex justify-between bg-base-100">
      {/* for desktop */}
      <div className="hidden md:block">
        {isCollapsed ? (
          <TbLayoutSidebarRightCollapse
            className="cursor-pointer hidden md:block"
            onClick={() => setIsCollapsed((prevState) => !isCollapsed)}
            size={20}
          />
        ) : (
          <TbLayoutSidebarRightExpand
            className="cursor-pointer hidden md:block"
            onClick={() => setIsCollapsed((prevState) => !isCollapsed)}
            size={20}
          />
        )}
      </div>
      <div className="tooltip tooltip-left tooltip-info" data-tip="logout">
        <AiOutlineLogout
          onClick={() => handleLogout()}
          className="md:block hidden cursor-pointer"
          size={20}
        />
      </div>
      {/* for mobile */}
      <div className="flex justify-between md:hidden w-full">
        <RxHamburgerMenu
          onClick={() => setIsCollapsed((prevState) => !prevState)}
          className="cursor-pointer block md:hidden"
          size={20}
        />

        <AiOutlineLogout
          onClick={() => handleLogout()}
          className="block md:hidden cursor-pointer"
          size={20}
        />
      </div>
    </div>
  );
};

export default Navbar;
