import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [mobileSidebarToggle, setMobileSidebarToggle] = useState(false);
  const [desktopSidebarToggle, setDesktopSidebarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <AppContext.Provider
      value={{
        mobileSidebarToggle,
        darkMode,
        desktopSidebarToggle,
        setMobileSidebarToggle,
        setDarkMode,
        setDesktopSidebarToggle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
