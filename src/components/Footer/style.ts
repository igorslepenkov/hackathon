import styled from "styled-components";
import { Color, fonts, Media } from "../../ui";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100px;
  padding: 0 24px;
  background-color: ${Color.White};

  ${Media.SM} {
    flex-direction: row;
    justify-content: space-between;
  }

  ${Media.MD} {
    border-radius: 40px 40px 0 0;
  }
`;

export const FooterParagraph = styled.p`
  ${fonts.h4}
  color: ${Color.BlueSecondary};
`;
