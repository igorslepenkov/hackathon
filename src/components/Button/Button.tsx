import { ReactNode } from "react";
import { StyledButton } from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button = ({ children, ...props }: IProps) => {
  return (
    <StyledButton id={uuidv4()} {...props}>
      {children}
    </StyledButton>
  );
};
