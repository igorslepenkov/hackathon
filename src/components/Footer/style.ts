import styled from "styled-components";
import { Color, fonts, Media } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 24px;
  min-height: 100px;
  background-color: ${Color.White};

  ${Media.SM} {
    flex-direction: row;
  }
`;

export const FooterParagraph = styled.p`
  ${fonts.h4}
  color: ${Color.BlueSecondary};
`;
