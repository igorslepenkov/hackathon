import styled from "styled-components";
import { css } from "styled-components";
import { Color, fonts, Media } from "../../ui";

type BadgeProps = {
  isActive: boolean;
};

export const StyledCalendarForm = styled.form`
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
`;

export const Calendar = styled.div`
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

export const CalendarDateBadge = styled.label<BadgeProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  padding: 15px;
  ${fonts.h5}
  ${({ isActive }: BadgeProps) => {
    console.log();
    if (isActive) {
      return css`
        color: ${Color.YellowPrimary};
        background-color: ${Color.BlueSecondary};
      `;
    }
    return css`
      color: ${Color.DarkBluePrim};
      background-color: ${Color.YellowPrimary};
    `;
  }}

  text-align: center;
  border-radius: 20px;

  ${Media.SM} {
    width: 90px;
    height: 90px;
    padding: 25px;
    ${fonts.h4};
  }
`;

export const CalendarDateCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const CalendarInput = styled.input`
  ${fonts.h3}
  color: ${Color.DarkBluePrim};
`;
