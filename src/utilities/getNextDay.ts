/**
 * Get the next day of the passed date
 *
 * @param currentDate today's date
 * @returns Date next day
 */
export function getNextDay(currentDate: Date): Date {
  const nextDay = new Date(currentDate);

  nextDay.setDate(currentDate.getDate() + 1);

  return nextDay;
}
