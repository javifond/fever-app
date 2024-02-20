import { test, expect, it } from "vitest";
import { IPet } from "../interfaces/IPet";
import { getRandomPet } from "./getRandomPet";

const pets: IPet[] = [
  {
    id: 1,
    name: "Jade",
    kind: "dog",
    weight: 2741,
    height: 20,
    length: 35,
    photo_url: "https://cdn2.thedogapi.com/images/rJH9KQoEX.gif",
    description: "Bacon ipsum dolor amet ham pork belly cupim rump salami",
  },
];

test("getRandomPet", () => {
  it("returns a random pet from the array", () => {
    const randomPet = getRandomPet(pets);

    expect(pets).toContainEqual(randomPet);
  });

  it("returns null for null input", () => {
    const result = getRandomPet(null);
    expect(result).toBeNull();
  });

  it("returns null for an empty array", () => {
    const result = getRandomPet([]);
    expect(result).toBeNull();
  });
});
