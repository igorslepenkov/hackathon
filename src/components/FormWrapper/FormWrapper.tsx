import { ReactNode } from "react";
import { StyledFormWrapper } from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  children: ReactNode;
  onSubmit?: () => void;
}

export const FormWrapper = ({ children, onSubmit }: IProps) => {
  return (
    <StyledFormWrapper id={uuidv4()} onSubmit={onSubmit}>
      {children}
    </StyledFormWrapper>
  );
};
