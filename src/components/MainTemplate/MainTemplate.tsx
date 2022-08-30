import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyleMainTemplate } from "./style";

export const MainTemplate = () => {
  return (
    <StyleMainTemplate>
      <Header />
      <Outlet />
      <Footer />
    </StyleMainTemplate>
  );
};
