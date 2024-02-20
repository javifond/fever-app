import { test, expect, it } from "vitest";
import { calculateHealth } from "./HealthyBadge.utils";
import { IHealth } from "../../interfaces/IHealth";
import { HEALTH_VALUES } from "./HealthyBadge.constants";

test("calculateHealth", () => {
  it("should return unhealthy for a cat with 1 life", () => {
    const petHealth: IHealth = {
      kind: "cat",
      weight: 5,
      height: 0.4,
      length: 0.8,
      number_of_lives: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.UNHEALTHY);
  });

  it("should return unhealthy for calculated health below 2", () => {
    const petHealth: IHealth = {
      kind: "dog",
      weight: 2,
      height: 1,
      length: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.UNHEALTHY);
  });

  it("should return unhealthy for calculated health above 5", () => {
    const petHealth: IHealth = {
      kind: "dog",
      weight: 10,
      height: 0.5,
      length: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.UNHEALTHY);
  });

  it("should return healthy for calculated health between 3 and 5", () => {
    const petHealth: IHealth = {
      kind: "dog",
      weight: 6,
      height: 0.6,
      length: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.HEALTHY);
  });

  it("should return very healthy for calculated health between 2 and 3", () => {
    const petHealth: IHealth = {
      kind: "dog",
      weight: 4,
      height: 0.8,
      length: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.VERY_HEALThY);
  });

  it("should return unknown for unknown conditions", () => {
    const petHealth: IHealth = {
      kind: "unknown",
      weight: 5,
      height: 0.5,
      length: 1,
    };

    const result = calculateHealth(petHealth);

    expect(result).toBe(HEALTH_VALUES.UNKNOWN);
  });
});
