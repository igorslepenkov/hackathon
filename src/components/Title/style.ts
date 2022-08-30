import styled from "styled-components";
import { fonts } from "../../ui";

interface TitleProps {
  color: string;
}

export const StyledTitleH1 = styled.h1`
  ${fonts.h1}
  color: ${({ color }: TitleProps) => color};
`;

export const StyledTitleH2 = styled.h2`
  ${fonts.h2}
  color: ${({ color }: TitleProps) => color};
`;

export const StyledTitleH3 = styled.h3`
  ${fonts.h3}
  color: ${({ color }: TitleProps) => color};
`;

export const StyledTitleH4 = styled.h4`
  ${fonts.h4}
  color: ${({ color }: TitleProps) => color};
`;
