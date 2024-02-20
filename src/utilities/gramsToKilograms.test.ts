import { test, expect, assert } from "vitest";
import { gramsToKilograms } from "./gramsToKilograms";

// Test case 1: Valid input
test("Converts grams to kilograms - valid input", () => {
  const result = gramsToKilograms(1500);
  expect(result).toBe("1.50kg");
});

// Test case 2: Valid input with decimal
test("Converts grams to kilograms - valid input with decimal", () => {
  const result = gramsToKilograms(1200.555);
  expect(result).toBe("1.20kg");
});

// Test case 3: Invalid input (NaN)
test("Converts grams to kilograms - invalid input", () => {
  assert.throws(
    () => gramsToKilograms(NaN),
    "Invalid input. Please provide a valid positive number in grams."
  );
});

// Test case 4: Invalid input (zero)
test("Converts grams to kilograms - zero input", () => {
  assert.throws(
    () => gramsToKilograms(0),
    "Invalid input. Please provide a valid positive number in grams."
  );
});

// Test case 5: Invalid input (negative number)
test("Converts grams to kilograms - negative input", () => {
  assert.throws(
    () => gramsToKilograms(-500),
    "Invalid input. Please provide a valid positive number in grams."
  );
});
