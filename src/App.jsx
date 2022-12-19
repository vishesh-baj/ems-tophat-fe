import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "./pages";
import PrivateRoutes from "./routes/PrivateRoutes";
import routes from "./routes/routes";
const App = () => {
  return (
    <div className="font-montserrat">
      <Routes>
        <Route element={<PrivateRoutes />}>
          {routes.map(({ key, path, Element }) => (
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
