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
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "./features/users/UserSlice";
const App = () => {
  const user = useSelector(showUser);
  const dispatch = useDispatch();
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

        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </div>
  );
};

export default App;
