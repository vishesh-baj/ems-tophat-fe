import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import routes from "./routes/routes";
const App = () => {
  console.log("hi");
  return (
    <div className="font-montserrat">
      <Routes>
        {routes.map(({ key, path, Element }) => (
          <Route key={key} path={path} element={<Element />} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
