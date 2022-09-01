import { ReactNode } from "react";
import { StyledFormWrapper } from "./style";

interface IProps {
  children: ReactNode;
  onSubmit?: () => void;
}

export const FormWrapper = ({ children, onSubmit }: IProps) => {
  return <StyledFormWrapper onSubmit={onSubmit}>{children}</StyledFormWrapper>;
};
