import { useForm } from "react-hook-form";
import { useAppSelector } from "../../store/hooks";
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
    const { start, end, duration } = values;
    const datesArray = Object.entries(values).filter(
      (entry) =>
        entry[0] !== "start" &&
        entry[0] !== "end" &&
        entry[0] !== "duration" &&
        entry[0] !== "duration" &&
        entry[1] !== false
    );
    const arrayOfDatesToReturn = datesArray.map((date) => {
      return { date: date[0], start, end, duration };
    });
    const doctorSchedule = {
      id: user?.id,
      role: user?.role,
      schedule: arrayOfDatesToReturn,
    };
    console.log(doctorSchedule);
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

      <FormLabel>Enter duration of visit in minutes</FormLabel>
      <FormInput
        type="number"
        placeholder="Duration in minutes"
        {...register("duration", {
          required: "Enter visit duration",
          validate: (value) => {
            return Number(value) % 10 === 0;
          },
          max: {
            value: 60,
            message: "Your duration must be not longer than 60 min",
          },
        })}
      />
      {errors && errors.duration && errors.duration && (
        <FormErrorNotification
          message={
            errors.duration.message
              ? errors.duration.message
              : "Your visit duration must a multiple of 10"
          }
        />
      )}
      <Button>Submit</Button>
    </StyledCalendarForm>
  );
};
