import { IPet } from "../interfaces/IPet";

/**
 * Receives the array of available pets and randomly
 * selects one out of the length of the received array
 *
 * @param pets IPet[] | null
 * @returns IPet | null
 */
export function getRandomPet(pets: IPet[] | null): IPet | null {
  if (!pets) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * pets.length);

  return pets[randomIndex];
}
