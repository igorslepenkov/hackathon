import styled from "styled-components";
import { Color } from "../../ui";

export const StyleMainTemplate = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1120px;
  margin: auto;
  background: ${Color.Gray};
`;
