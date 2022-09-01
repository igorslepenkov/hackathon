import { ReactNode } from "react";
import { StyledFormLabel } from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  children: ReactNode;
  htmlFor?: string;
}

export const FormLabel = ({ children, htmlFor }: IProps) => {
  return (
    <StyledFormLabel id={uuidv4()} htmlFor={htmlFor}>
      {children}
    </StyledFormLabel>
  );
};
