import { test, expect, it } from "vitest";
import { sortPetsByParameter } from "./sortPetsByParameter";
import { IPet } from "../interfaces/IPet";
import { SORT_BY_OPTIONS } from "../components/PetSortingSelector/PetSortingSelector.constants";

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
  {
    id: 2,
    name: "Stinky",
    kind: "cat",
    weight: 6712,
    height: 25,
    length: 52,
    photo_url: "https://cdn2.thecatapi.com/images/2lt.jpg",
    description:
      "I shall purr myself to sleep pee in the shoe scratch at fleas",
    number_of_lives: 5,
  },
];

test("sortPetsByParameter", () => {
  it("should sort pets by weight", () => {
    const sortedPets = sortPetsByParameter([...pets], SORT_BY_OPTIONS.WEIGHT);
    expect(sortedPets).toMatchSnapshot();
  });

  it("should sort pets by length", () => {
    const sortedPets = sortPetsByParameter([...pets], SORT_BY_OPTIONS.LENGTH);
    expect(sortedPets).toMatchSnapshot();
  });

  it("should sort pets by height", () => {
    const sortedPets = sortPetsByParameter([...pets], SORT_BY_OPTIONS.HEIGHT);
    expect(sortedPets).toMatchSnapshot();
  });

  it("should sort pets by name", () => {
    const sortedPets = sortPetsByParameter([...pets], SORT_BY_OPTIONS.NAME);
    expect(sortedPets).toMatchSnapshot();
  });

  it("should sort pets by kind", () => {
    const sortedPets = sortPetsByParameter([...pets], SORT_BY_OPTIONS.KIND);
    expect(sortedPets).toMatchSnapshot();
  });

  it("should return the same array for an unknown sort parameter", () => {
    const sortedPets = sortPetsByParameter([...pets], "unknown");
    expect(sortedPets).toMatchSnapshot();
  });
});
