import { useContext } from "react";
import { FetchPetsContext } from "../context/FetchPetsContext";

export const useFetchPets = () => {
  const context = useContext(FetchPetsContext);

  if (!context) {
    throw new Error("useFetchPets must be used within a FetchPetsProvider");
  }

  return context;
};
