/**
 * Converts the passed value in grams to kilograms.
 *
 * @param grams
 * @returns string value in kilograms with 2 decimals.
 */
export function gramsToKilograms(grams: number): string {
  if (isNaN(grams) || grams <= 0) {
    throw new Error(
      "Invalid input. Please provide a valid positive number in grams."
    );
  }

  const kilogramsValue = grams / 1000;
  const roundedValue = kilogramsValue.toFixed(2);

  return `${roundedValue}kg`;
}
