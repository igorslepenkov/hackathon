import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts } from "../../ui";

interface VisibleCheckboxProps {
  isActive: boolean;
}

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

export const StyledCheckboxVisible = styled.label<VisibleCheckboxProps>`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  ${({ isActive }) => {
    if (isActive) {
      return css`
        background-color: ${Color.YellowPrimary};
      `;
    } else {
      return css`
        background-color: ${Color.DarBlueSec};
      `;
    }
  }}
`;
