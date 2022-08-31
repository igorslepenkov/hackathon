import { ReactNode } from "react";
import { StyledPage } from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  children: ReactNode;
}

export const Page = ({ children }: IProps) => {
  return <StyledPage id={uuidv4()}>{children}</StyledPage>;
};
