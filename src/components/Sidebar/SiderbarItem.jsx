import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
const SiderbarItem = ({
  Icon,
  title,
  iconSize,
  path,
  collapseState,
  tooltip,
}) => {
  const { setIsCollapsed } = useContext(AppContext);
  return (
    <>
      {collapseState ? (
        <NavLink
          to={path}
          data-tip={tooltip}
          className={({ isActive }) =>
            isActive
              ? "transition-all btn flex justify-center btn-ghost gap-2 bg-gray-700 mx-4 tooltip tooltip-right"
              : "transition-all btn flex justify-center btn-ghost  gap-2 tooltip tooltip-right"
          }
        >
          <Icon size={iconSize} />
        </NavLink>
      ) : (
        <NavLink
          to={path}
          // TODO: should only change collapsed state in mobile device
          // onClick={() =>
          //   setIsCollapsed((prevState) => setIsCollapsed(!prevState))
          // }
          className={({ isActive }) =>
            isActive
              ? "transition-all btn btn-block flex justify-start btn-ghost gap-2 bg-gray-700"
              : "transition-all btn btn-block flex justify-start btn-ghost gap-2"
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
