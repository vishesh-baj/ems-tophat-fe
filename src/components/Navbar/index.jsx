import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  TbLayoutSidebarRightExpand,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const { isCollapsed, setIsCollapsed } = useContext(AppContext);

  return (
    <div className="navbar bg-base-100">
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
      {/* for mobile */}
      <div className="flex justify-between md:hidden w-full">
        <RxHamburgerMenu
          onClick={() => setIsCollapsed((prevState) => !prevState)}
          className="cursor-pointer block md:hidden"
          size={20}
        />

        <span>Navbar</span>
      </div>
    </div>
  );
};

export default Navbar;
