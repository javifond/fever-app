import { IHealth } from "../../interfaces/IHealth";
import { HEALTH_VALUES } from "./HealthyBadge.constants";

/**
 * Calculates the pet health based on the required criteria, as follows:
 * - unhealthy kind cat and number of lives equals to 1
 * - unhealthy below 2 or over 5
 * - healthy between 3 and 5
 * - very healthy between 2 and 3
 *
 * Using a switch case, this functionality could be
 * extended to cover more health check criteria.
 *
 * @param IHealth
 * @returns
 */
export function calculateHealth({
  kind,
  weight,
  height,
  length,
  number_of_lives,
}: IHealth): string {
  const calculatedHealth = weight / (height * length);

  if (kind === "cat" && number_of_lives === 1) {
    return HEALTH_VALUES.UNHEALTHY;
  }

  switch (true) {
    case calculatedHealth < 2 || calculatedHealth > 5:
      return HEALTH_VALUES.UNHEALTHY;

    case calculatedHealth >= 3 && calculatedHealth <= 5:
      return HEALTH_VALUES.HEALTHY;

    case calculatedHealth >= 2 && calculatedHealth < 3:
      return HEALTH_VALUES.VERY_HEALTHY;

    default:
      return HEALTH_VALUES.UNKNOWN;
  }
}
