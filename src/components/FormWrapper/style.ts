import styled from "styled-components";
import { Media } from "../../ui";

export const StyledFormWrapper = styled.form`
  margin: auto 0;
  display: grid;
  grid-template-rows: auto;
  row-gap: 10px;
  width: 100%;

  ${Media.SM} {
    width: fit-content;
    min-width: 500px;
    margin: auto;
  }
`;
