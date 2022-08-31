import { Routes, Route } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { HomePage } from "../pages/HomePage";
import { ROUTE } from "./routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};
