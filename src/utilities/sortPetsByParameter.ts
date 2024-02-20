import { IPet } from "../interfaces/IPet";
import { SORT_BY_OPTIONS } from "../components/PetSortingSelector/PetSortingSelector.constants";

/**
 * Sorts the pets array received considering the sortBy parameter.
 *
 * @param pets IPet[]
 * @param sortBy string
 * @returns the sorted list according to the sorting parameter or does not
 * order the list if the option is not valid.
 */
export function sortPetsByParameter(pets: IPet[], sortBy: string): IPet[] {
  return pets.sort((a, b) => {
    switch (sortBy) {
      case SORT_BY_OPTIONS.WEIGHT:
        return a.weight - b.weight;

      case SORT_BY_OPTIONS.LENGTH:
        return a.length - b.length;

      case SORT_BY_OPTIONS.HEIGHT:
        return a.height - b.height;

      case SORT_BY_OPTIONS.NAME:
        return a.name.localeCompare(b.name);

      case SORT_BY_OPTIONS.KIND:
        return a.kind.localeCompare(b.kind);

      default:
        return 0;
    }
  });
}
