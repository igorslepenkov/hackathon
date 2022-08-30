import { ReactNode } from "react";
import { StyledButton } from "./style";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  handler?: () => void;
}

export const Button = ({ children, ...props }: IProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
