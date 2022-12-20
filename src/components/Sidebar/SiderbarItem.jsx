import React from "react";
import { NavLink } from "react-router-dom";
const SiderbarItem = ({ Icon, title, iconSize, path, collapseState }) => {
  return (
    <>
      {collapseState ? (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? "transition-all btn flex justify-center btn-ghost gap-2 bg-gray-700 mx-4"
              : "transition-all btn flex justify-center btn-ghost  gap-2 "
          }
        >
          <Icon size={iconSize} />
        </NavLink>
      ) : (
        <NavLink
          to={path}
          className={({ isActive }) =>
            isActive
              ? "btn btn-block flex justify-start btn-ghost gap-2 bg-gray-700"
              : "btn btn-block flex justify-start btn-ghost  gap-2"
          }
        >
          <Icon size={iconSize} />
          {title}
        </NavLink>
      )}
    </>
  );
};

export default SiderbarItem;
