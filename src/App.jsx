import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import { PATHS } from "./routes/paths";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  // const dummy = {
  //   email: "test@gmail.com",
  //   password: "testcode",
  // };
  // useEffect(() => {
  //   console.log("App running");
  //   axios
  //     .post("http://localhost:5000/login", dummy)
  //     .then((res) => console.log(res));
  // }, []);

  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoutes />}>
          {PATHS.map(({ key, path, Element }) => (
            <Route key={key} path={path} element={<Element />} />
          ))}
        </Route>
        <Route element={<LoginPage />} path="/LoginPage" />
        <Route element={<RegisterPage />} path="/RegisterPage" />
      </Routes>
    </div>
  );
};

export default App;
