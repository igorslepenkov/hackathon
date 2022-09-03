import { getDateArrayFromToday, getDateStringFromDate } from "../../utils";
import { Button } from "../Button";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import {
  Calendar,
  CalendarDateBadge,
  CalendarDateCheckbox,
  StyledCalendarForm,
} from "./style";

// type FormValues = {
//   [key: string]: string;
// };

export const CalendarForm = () => {
  const nearestTwoWeeksArray = getDateArrayFromToday(14);
  return (
    <StyledCalendarForm>
      <Calendar>
        {nearestTwoWeeksArray.map((date) => {
          return (
            <CalendarDateBadge
              key={date.day}
              htmlFor={`${date.month}/${date.day}`}
            >
              {getDateStringFromDate(date)}
              <CalendarDateCheckbox
                id={`${date.month}/${date.day}`}
                value={`${date.month}/${date.day}`}
              />
            </CalendarDateBadge>
          );
        })}
      </Calendar>
      <FormLabel>Enter your working hours</FormLabel>
      <FormInput type="number" placeholder="Number of visits" />

      <FormLabel>Enter duration of visit in minutes</FormLabel>
      <FormInput type="number" placeholder="Duration in minutes" />
      <Button>Submit</Button>
    </StyledCalendarForm>
  );
};
