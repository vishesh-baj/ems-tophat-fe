import { Home } from "@material-ui/icons";
import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  LoginPage,
  RegisterPage,
  DashboardHomePage,
  CandidatesPage,
  EmployeesPage,
} from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import ReverseAuthRoute from "./routes/ReverseAuthRoute";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<EmployeesPage />} path="/dashboard/employees" />
          <Route element={<DashboardHomePage />} path="/dashboard/home" />
          <Route element={<CandidatesPage />} path="/dashboard/candidates" />
        </Route>
        <Route element={<ReverseAuthRoute />}>
          <Route element={<LoginPage />} path="/login" />
        </Route>
        <Route element={<HomePage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
