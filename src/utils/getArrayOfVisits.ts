export const getArrayOfVisits = (start: string, end: string) => {
  const startMinutes = Number(start.split(":").join(".")) * 60;
  const endMinutes = Number(end.split(":").join(".")) * 60;
  const timeRangeInMinutes = endMinutes - startMinutes;
  const numberOfVisits = Math.floor(timeRangeInMinutes / 30);
  const visitsArray = [];
  for (let i = numberOfVisits, start = startMinutes; i > 0; i--) {
    visitsArray.push(
      (start / 60)
        .toString()
        .split(".")
        .join(":")
        .replace(/:5/, ":30")
        .padEnd(5, ":00")
    );
    start += 30;
  }
  return visitsArray;
};
