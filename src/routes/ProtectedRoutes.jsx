import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let auth = { token: false };
  return auth.token ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
