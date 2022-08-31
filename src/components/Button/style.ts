import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledButton = styled.button`
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px 40px;
  ${fonts.h4}
  color: ${Color.White};
  background-color: ${Color.BluePrimary};
  border: none;
  border-radius: 46px;
  cursor: pointer;
`;
