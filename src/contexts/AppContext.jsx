import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <AppContext.Provider value={{ isCollapsed, setIsCollapsed }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
