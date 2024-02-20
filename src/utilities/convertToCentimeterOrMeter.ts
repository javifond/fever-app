/**
 * Converts the passed value to meters if is bigger than 100,
 * if not returns the value concatenated with `cm`,
 * in case the value is bigger than 100, it converts it to meters
 * and concatenate it with `m`.
 *
 * @param centimeters
 * @returns a string with the converted value concatenated with `cm` or `m`
 */
export function convertToCentimetersOrMeters(centimeters: number): string {
  if (isNaN(centimeters) || centimeters <= 0) {
    throw new Error(
      "Invalid input. Please provide a valid positive number in centimeters."
    );
  }

  if (centimeters < 100) {
    return `${centimeters}cm`;
  }

  const metersValue = centimeters / 100;
  return `${metersValue}m`;
}
