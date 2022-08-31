import styled from "styled-components";
import { Color, fonts } from "../../ui";

export const StyledCheckboxGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const StyledCheckbox = styled.input.attrs({ type: "radio" })`
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0;
  border: none;
  &:focus + label {
    background-color: ${Color.YellowPrimary};
  }
`;

export const StyledCheckboxLabel = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  margin-right: 10px;

  ${fonts.h5}
  color: ${Color.DarkBluePrim};
  text-transform: capitalize;
`;

export const StyledCheckboxVisible = styled.label`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${Color.DarBlueSec};
`;
