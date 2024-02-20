import { test, expect, assert } from "vitest";
import { convertToCentimetersOrMeters } from "./convertToCentimeterOrMeter";

// Test case 1: Value less than 100cm
test("Converts to centimeters - value less than 100", () => {
  const result = convertToCentimetersOrMeters(75);
  expect(result).toBe("75cm");
});

// Test case 2: Value equal to 100cm
test("Converts to meters - value equal to 100", () => {
  const result = convertToCentimetersOrMeters(100);
  expect(result).toBe("1m");
});

// Test case 3: Value greater than 100cm
test("Converts to meters - value greater than 100", () => {
  const result = convertToCentimetersOrMeters(120);
  expect(result).toBe("1.2m");
});

// Test case 4: Invalid input (NaN)
test("Converts to centimeters - NaN", () => {
  assert.throws(
    () => convertToCentimetersOrMeters(NaN),
    "Invalid input. Please provide a valid positive number in centimeters."
  );
});

// Test case 5: Invalid input (zero)
test("Converts to centimeters - zero", () => {
  assert.throws(
    () => convertToCentimetersOrMeters(0),
    "Invalid input. Please provide a valid positive number in centimeters."
  );
});

// Test case 6: Invalid input (negative number)
test("Converts to centimeters - negative number", () => {
  assert.throws(
    () => convertToCentimetersOrMeters(-500),
    "Invalid input. Please provide a valid positive number in centimeters."
  );
});
