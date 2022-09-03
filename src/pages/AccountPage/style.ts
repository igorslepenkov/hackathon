import styled from "styled-components";
import { Color, fonts, Media } from "../../ui";

export const AccountPageContentWrapper = styled.div`
  justify-self: center;
  align-self: center;
`;

export const AccountTable = styled.section`
  display: grid;
  align-items: center;
  column-gap: 20px;
  row-gap: 10px;
  margin: 20px 0;

  ${Media.SM} {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    border: 2px solid ${Color.BluePrimary};
  }
`;

export const AccountPageValue = styled.p`
  padding: 20px 0;
  ${fonts.h4}
  color: ${Color.BlueSecondary};
  vertical-align: center;
  border-bottom: 2px solid ${Color.BluePrimary};
`;