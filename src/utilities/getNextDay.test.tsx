import { test, expect, it } from "vitest";
import { getNextDay } from "./getNextDay";

test("getNextDay", () => {
  it("should return the next day", () => {
    const today = new Date(2023, 10, 1); // November 1, 2023
    const tomorrow = getNextDay(today);

    // Check if the date is one day ahead
    expect(tomorrow.getDate()).toBe(2);
    expect(tomorrow.getMonth()).toBe(10);
    expect(tomorrow.getFullYear()).toBe(2023);
  });

  it("should handle the end of the month and year", () => {
    const today = new Date(2023, 11, 31); // December 31, 2023
    const nextDay = getNextDay(today);

    // Check if the date is the first day of the next month and year
    expect(nextDay.getDate()).toBe(1);
    expect(nextDay.getMonth()).toBe(0);
    expect(nextDay.getFullYear()).toBe(2024); // Next year
  });
});
