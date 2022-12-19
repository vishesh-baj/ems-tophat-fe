import axios from "axios";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, DashboardPage } from "./pages";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardPage />} path="/dashboard" />
        </Route>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Routes>
    </div>
  );
};

export default App;