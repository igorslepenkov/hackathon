import { Routes, Route } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { AccountPage } from "../pages/AccountPage";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.REGISTER} element={<RegisterPage />} />
        <Route path={ROUTE.ACCOUNT} element={<AccountPage />} />
      </Route>
    </Routes>
  );
};
