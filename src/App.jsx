import { Home } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./constants";
import {
  LoginPage,
  RegisterPage,
  DashboardHomePage,
  CandidatesPage,
  EmployeesPage,
  RecordsPage,
  PageNotFoundPage,
  HomePage,
} from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import ReverseAuthRoute from "./routes/ReverseAuthRoute";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";
import ForgetPasswordPage from "./pages/ForgetPasswordPage";

const App = () => {
  // useEffect(() => {
  //   const html = document.getElementByTagName("html");
  //   console.log(html);
  // }, []);
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            element={<EmployeesPage />}
            path={PATHS.dashboardEmployeesList}
          />
          <Route element={<DashboardHomePage />} path={PATHS.dashboardHome} />
          <Route
            element={<CandidatesPage />}
            path={PATHS.dashboardCandidatesList}
          />
          <Route element={<RecordsPage />} path={PATHS.recordsList} />
        </Route>
        <Route element={<ReverseAuthRoute />}>
          <Route element={<LoginPage />} path={PATHS.login} />
        </Route>
        <Route element={<HomePage />} path={PATHS.root} />
        <Route element={<RegisterPage />} path={PATHS.register} />
        <Route element={<ForgetPasswordPage />} path={PATHS.forgetPassword} />
        <Route path="/*" element={<PageNotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
