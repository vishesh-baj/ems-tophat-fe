import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log(token);

  let auth = { token };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoutes;
