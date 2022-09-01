import styled from "styled-components";
import { Color } from "../../ui";

export const StyleMainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: content-box;
  min-height: 100vh;
  max-width: 1120px;
  margin: auto;
  background: ${Color.Gray};
`;
