import styled from "styled-components";
import { Color } from "../../ui";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  min-height: 100px;
  background-color: ${Color.BluePrimary};
  border-radius: 0 0 40px 40px;
`;
