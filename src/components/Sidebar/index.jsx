import React, { useContext } from "react";
import SiderbarItem from "./SiderbarItem";
import { AppContext } from "../../contexts/AppContext";
import { IoIosClose } from "react-icons/io";
import { IoPeopleCircle } from "react-icons/io5";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineCalendar,
} from "react-icons/ai";

import { PATHS } from "../../constants/";
const Sidebar = () => {
  const { mobileSidebarToggle, setMobileSidebarToggle, desktopSidebarToggle } =
    useContext(AppContext);

  return (
    // for desktop
    <>
      <div
        className={`${
          desktopSidebarToggle ? "w-[100px]" : "w-1/4"
        } h-full bg-base-200 transition-all ease-in-out duration-200 hidden md:flex flex-col`}
      >
        <div className="w-full h-16 flex justify-between items-center px-2">
          <span className="ml-2 text-red-500">
            Top<span className="text-white">hat</span>
          </span>
        </div>
        <div className="p-2">
          <SiderbarItem
            path={PATHS.dashboardHome}
            iconSize={20}
            Icon={AiOutlineHome}
            title="Home"
            collapseState={desktopSidebarToggle}
            tooltip="Dashboard Home"
          />
          <SiderbarItem
            path={PATHS.dashboardEmployeesList}
            iconSize={20}
            Icon={IoPeopleCircle}
            title="Employees"
            collapseState={desktopSidebarToggle}
            tooltip="Employees List"
          />
          <SiderbarItem
            path={PATHS.dashboardCandidatesList}
            iconSize={20}
            Icon={AiOutlineUsergroupAdd}
            title="Candidates"
            collapseState={desktopSidebarToggle}
            tooltip="Candidates List"
          />
          <SiderbarItem
            path={PATHS.dashboardRecordsList}
            iconSize={20}
            Icon={AiOutlineCalendar}
            title="Records"
            collapseState={desktopSidebarToggle}
            tooltip="Records List"
          />
        </div>
      </div>

      {/* for mobile devices */}
      <div
        className={`${
          mobileSidebarToggle ? "translate-x-[-100%]" : "translate-x-[0%]"
        } h-full bg-base-200 transition-all ease-in-out duration-200  fixed flex flex-col  md:hidden w-3/4 z-20`}
      >
        <div className="w-full h-16 flex justify-between items-center px-2 bg-base-100">
          <span className="ml-2">Sidebar</span>
          <button className="btn btn-circle btn-ghost">
            <IoIosClose
              onClick={() => setMobileSidebarToggle((prevState) => !prevState)}
              size={20}
            />
          </button>
        </div>
        <div className="w-full flex flex-col gap-2 p-2">
          <SiderbarItem
            path={PATHS.dashboardHome}
            iconSize={20}
            Icon={AiOutlineHome}
            title="Home"
          />
          <SiderbarItem
            path={PATHS.dashboardEmployeesList}
            iconSize={20}
            Icon={IoPeopleCircle}
            title="Employees"
          />
          <SiderbarItem
            path={PATHS.dashboardCandidatesList}
            iconSize={20}
            Icon={AiOutlineUsergroupAdd}
            title="Candidates"
          />
          <SiderbarItem
            path={PATHS.dashboardRecordsList}
            iconSize={20}
            Icon={AiOutlineCalendar}
            title="Records"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
