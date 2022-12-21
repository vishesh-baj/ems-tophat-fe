import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  return (
    <AppContext.Provider
      value={{ isCollapsed, darkMode, setIsCollapsed, setDarkMode }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
