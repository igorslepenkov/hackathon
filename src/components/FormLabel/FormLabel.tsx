import { ReactNode } from "react";
import { StyledFormLabel } from "./style";

interface IProps {
  children: ReactNode;
  htmlFor?: string;
}

export const FormLabel = ({ children, htmlFor }: IProps) => {
  return <StyledFormLabel htmlFor={htmlFor}>{children}</StyledFormLabel>;
};
