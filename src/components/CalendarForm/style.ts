import styled from "styled-components";
import { Color, fonts, Media } from "../../ui";

export const StyledCalendarForm = styled.form`
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  row-gap: 10px;
  column-gap: 10px;
  ${Media.SM} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CalendarDateBadge = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  ${fonts.h4}
  color: ${Color.DarkBluePrim};
  background-color: ${Color.BluePrimary};
  text-align: center;
  border-radius: 50%;

  ${Media.SM} {
    padding: 25px;
    ${fonts.h3};
  }
`;
export const CalendarDateCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;
