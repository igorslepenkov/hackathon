import styled from "styled-components";
import { Color, Media } from "../../ui";

export const StyledFormWrapper = styled.form`
  display: grid;
  grid-template-rows: auto;
  row-gap: 10px;
  width: 80%;
  margin: auto;

  ${Media.MD} {
    width: fit-content;
    min-width: 500px;
    padding: 20px;
    border: 1px solid ${Color.BluePrimary};
    border-radius: 20px;
  }
`;
