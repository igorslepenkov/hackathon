import styled from "styled-components";
import { Media } from "../../ui";

export const StyledFormWrapper = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 10px;
  width: 80%;
  margin: auto;

  ${Media.MD} {
    width: fit-content;
    min-width: 500px;
  }
`;
