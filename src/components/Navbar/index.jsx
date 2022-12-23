import React, { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import {
  TbLayoutSidebarRightExpand,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineDarkMode, MdOutlineWbSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants";

const Navbar = () => {
  const {
    mobileSidebarToggle,
    setMobileSidebarToggle,
    desktopSidebarToggle,
    setDesktopSidebarToggle,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(AppContext);

  const handleLogout = () => {
    localStorage.clear();
    console.log("Login");
    navigate(PATHS.login);
  };

  const handleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
    localStorage.setItem("theme", darkMode);
  };

  return (
    <div className="navbar flex justify-between mx-2">
      {/* for desktop */}
      <div className="hidden md:block">
        {desktopSidebarToggle ? (
          <TbLayoutSidebarRightCollapse
            className="cursor-pointer hidden md:block text-secondary hover:text-secondary-focus"
            onClick={() =>
              setDesktopSidebarToggle((prevState) => {
                console.log(desktopSidebarToggle);
                return !prevState;
              })
            }
            size={20}
          />
        ) : (
          <TbLayoutSidebarRightExpand
            className="cursor-pointer hidden md:block text-secondary hover:text-secondary-focus"
            onClick={() => setDesktopSidebarToggle((prevState) => !prevState)}
            size={20}
          />
        )}
      </div>
      <div className="md:flex hidden gap-3 pr-9">
        {darkMode ? (
          <MdOutlineDarkMode
            className="text-primary hover:text-primary-focus cursor-pointer"
            onClick={handleDarkMode}
            size={20}
          />
        ) : (
          <MdOutlineWbSunny
            className="text-primary hover:text-primary-focus cursor-pointer"
            onClick={handleDarkMode}
            size={20}
          />
        )}
        <div className="tooltip tooltip-left tooltip-info" data-tip="logout">
          <AiOutlineLogout
            onClick={() => handleLogout()}
            className="md:block hidden cursor-pointer"
            size={20}
          />
        </div>
      </div>

      {/* for mobile */}
      <div className="flex justify-between md:hidden w-full">
        <RxHamburgerMenu
          onClick={() => setMobileSidebarToggle((prevState) => !prevState)}
          className="cursor-pointer block md:hidden"
          size={20}
        />

        <div className="flex gap-2">
          {darkMode ? (
            <MdOutlineDarkMode onClick={handleDarkMode} size={20} />
          ) : (
            <MdOutlineWbSunny onClick={handleDarkMode} size={20} />
          )}
          <AiOutlineLogout
            onClick={() => handleLogout()}
            className="block md:hidden cursor-pointer"
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
