import { IDate } from "../types";

export const getDateStringFromDate = (date: IDate) => {
  const monthList: [number, string][] = [
    [1, "Jan"],
    [2, "Feb"],
    [3, "Mar"],
    [4, "Apr"],
    [5, "May"],
    [6, "Jun"],
    [7, "Jul"],
    [8, "Aug"],
    [9, "Sep"],
    [10, "Oct"],
    [11, "Nov"],
    [12, "Dec"],
  ];
  const monthMap = new Map<number, string>(monthList);

  const weekDaysList: [number, string][] = [
    [1, "Mon"],
    [2, "Tue"],
    [3, "Wed"],
    [4, "Thu"],
    [5, "Fri"],
    [6, "Sat"],
    [7, "Sun"],
  ];
  const weekDaysMap = new Map<number, string>(weekDaysList);

  return `${date.day} ${monthMap.get(date.month)} (${weekDaysMap.get(
    date.dayOfWeek
  )})`;
};
