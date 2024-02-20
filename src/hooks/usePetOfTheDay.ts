import { useContext } from "react";
import { PetOfTheDayContext } from "../context/PetOfTheDayContext";

export const usePetOfTheDay = () => {
  const context = useContext(PetOfTheDayContext);

  if (!context) {
    throw new Error("usePetOfTheDay must be used within a PetOfTheDayProvider");
  }
  return context;
};
