/**
 * Defines the data object received from the API,
 * based on the documentation provided, as follows:
 *
 * The details endpoint will return a Pet object, with the following structure:
 * id Int the pet's unique id
 * name String The pet's name
 * kind String The pet's kind (dog or cat on the first version)
 * weight Int The pet's weight, in grams
 * height Int The pet's height in centimeters
 * length Int The pet's length, in centimeters
 * photo_url String The pet's picture url
 * description String A small text about the pet
 * number_of_lives Int between 1 and 7, only for Cats
 */
export interface IPet {
  id: number;
  name: string;
  kind: string;
  weight: number;
  height: number;
  length: number;
  photo_url: string;
  description: string;
  number_of_lives?: number;
}
