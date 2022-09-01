import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { StyleMainTemplate } from "./style";
import { v4 as uuidv4 } from "uuid";

export const MainTemplate = () => {
  return (
    <StyleMainTemplate id={uuidv4()}>
      <Header />
      <Outlet />
      <Footer />
    </StyleMainTemplate>
  );
};
