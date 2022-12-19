import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import ReverseAuthRoute from "./routes/ReverseAuthRoute";
const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<DashboardPage />} path="/dashboard" />
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
