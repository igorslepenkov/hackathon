import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const Input = styled.input`
  flex-grow: 1;
  width: 100%;
  padding: 5px 20px;
  ${fonts.h5}
  color: ${Color.DarkBluePrim};
  border: 1px solid ${Color.BluePrimary};
  border-radius: 28px;
  outline: none;

  &:focus {
    background-color: ${Color.Gray};
    border: 2px solid ${Color.BluePrimary};
  }

  &::placeholder {
    ${fonts.h5}
    color: ${Color.DarkBluePrim};
    opacity: 1;
  }
`;
