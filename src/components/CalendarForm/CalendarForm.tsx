import { getDateArrayFromToday, getDateStringFromDate } from "../../utils";
import {
  CalendarDateBadge,
  CalendarDateCheckbox,
  StyledCalendarForm,
} from "./style";

export const CalendarForm = () => {
  const nearestTwoWeeksArray = getDateArrayFromToday(14);
  return (
    <StyledCalendarForm>
      {nearestTwoWeeksArray.map((date) => {
        return (
          <CalendarDateBadge key={date.day}>
            {getDateStringFromDate(date)}
            <CalendarDateCheckbox />
          </CalendarDateBadge>
        );
      })}
    </StyledCalendarForm>
  );
};
