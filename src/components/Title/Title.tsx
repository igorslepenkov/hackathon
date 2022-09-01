import { ReactNode } from "react";
import {
  StyledTitleH1,
  StyledTitleH2,
  StyledTitleH3,
  StyledTitleH4,
} from "./style";
import { v4 as uuidv4 } from "uuid";

interface IProps {
  children: ReactNode;
  color: string;
  grade: number;
}

export const Title = ({ children, color, grade }: IProps) => {
  switch (grade) {
    case 1:
      return (
        <StyledTitleH1 id={uuidv4()} color={color}>
          {children}
        </StyledTitleH1>
      );
    case 2:
      return (
        <StyledTitleH2 id={uuidv4()} color={color}>
          {children}
        </StyledTitleH2>
      );
    case 3:
      return (
        <StyledTitleH3 id={uuidv4()} color={color}>
          {children}
        </StyledTitleH3>
      );
    case 4:
      return (
        <StyledTitleH4 id={uuidv4()} color={color}>
          {children}
        </StyledTitleH4>
      );
    default:
      return (
        <StyledTitleH1 id={uuidv4()} color={color}>
          {children}
        </StyledTitleH1>
      );
  }
};
