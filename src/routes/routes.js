import { DashboardPage, LoginPage, RegisterPage } from "../pages";
import { PATHS } from "./paths";

const routes = [
  {
    key: PATHS.loginPage,
    path: PATHS.loginPage,
    Element: LoginPage,
  },
  {
    key: PATHS.registerPage,
    path: PATHS.registerPage,
    Element: RegisterPage,
  },
  {
    key: PATHS.dashboardPage,
    path: PATHS.dashboardPage,
    Element: DashboardPage,
  },
];
export default routes;
