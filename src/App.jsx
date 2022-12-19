import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardPage, LoginPage, RegisterPage } from "./pages";
import { PATHS } from "./routes/paths";
import PrivateRoutes from "./routes/protectedRoutes";
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
        <Route
          element={<LoginPage />}
          key={PATHS.loginPage}
          path={PATHS.loginPage}
        />
        {/* <Route
          element={<RegisterPage />}
          key={PATHS.registerPage}
          path={PATHS.registerPage}
        /> */}
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardPage />} path={PATHS.dashboardPage} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
