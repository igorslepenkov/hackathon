import { useForm } from "react-hook-form";
import { setUserSchedule } from "../../store/features";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { IDoctorSchedule } from "../../types";
import { getDateArrayFromToday, getDateStringFromDate } from "../../utils";
import { Button } from "../Button";
import { FormErrorNotification } from "../FormErrorNotification";
import { FormInput } from "../FormInput";
import { FormLabel } from "../FormLabel";
import {
  Calendar,
  CalendarDateBadge,
  CalendarDateCheckbox,
  StyledCalendarForm,
} from "./style";

type FormValues = {
  [key: string]: string | boolean;
};

export const CalendarForm = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<FormValues>();
  const values = watch();
  const nearestTwoWeeksArray = getDateArrayFromToday(14);
  const onSubmit = (values: FormValues) => {
    const { start, end } = values;
    const datesArray = Object.entries(values).filter(
      (entry) =>
        entry[0] !== "start" && entry[0] !== "end" && entry[1] !== false
    );
    const arrayOfDatesToReturn = datesArray.map((date) => {
      return { date: date[0], start, end };
    });
    const doctorSchedule = {
      id: user?.id,
      role: user?.role,
      schedule: arrayOfDatesToReturn,
    };

    const objectToServer = Object.assign({}, doctorSchedule) as IDoctorSchedule;

    dispatch(setUserSchedule(objectToServer));

    reset();
  };
  return (
    <StyledCalendarForm onSubmit={handleSubmit(onSubmit)}>
      <Calendar>
        {nearestTwoWeeksArray.map((date) => {
          return (
            <CalendarDateBadge
              key={date.day}
              htmlFor={`${date.year}-${date.month}-${date.day}`}
              isActive={!!values[`${date.year}-${date.month}-${date.day}`]}
            >
              {getDateStringFromDate(date)}
              <CalendarDateCheckbox
                id={`${date.year}-${date.month}-${date.day}`}
                value={`${date.year}-${date.month}-${date.day}`}
                {...register(`${date.year}-${date.month}-${date.day}`)}
              />
            </CalendarDateBadge>
          );
        })}
      </Calendar>
      <FormLabel>Enter working hours start</FormLabel>
      <FormInput
        type="time"
        {...register("start", {
          required: "Enter working hours start",
        })}
      />
      {errors && errors.start && errors.start.message && (
        <FormErrorNotification message={errors.start.message} />
      )}

      <FormLabel>Enter working hours end</FormLabel>
      <FormInput
        type="time"
        {...register("end", {
          required: "Enter working hours end",
        })}
      />
      {errors && errors.end && errors.end.message && (
        <FormErrorNotification message={errors.end.message} />
      )}
      <Button>Submit</Button>
    </StyledCalendarForm>
  );
};
