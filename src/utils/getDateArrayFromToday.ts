export const getDateArrayFromToday = (numberOfDays: number) => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const datesArray = [];
  for (let i = 0; i < numberOfDays; i++) {
    datesArray.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const mappedDatesArray = datesArray.map((date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate() + 1,
      dayOfWeek: date.getDay() + 1,
    };
  });
  return mappedDatesArray;
};
