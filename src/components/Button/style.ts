import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledButton = styled.button`
  width: fit-content;
  padding: 20px 40px;
  ${fonts.h4}
  color: ${Color.White};
  background-color: ${Color.BluePrimary};
  border-radius: 46px;
  border: none;
  cursor: pointer;
`;
