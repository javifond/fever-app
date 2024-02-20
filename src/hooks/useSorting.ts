import { useContext } from "react";
import { SortingContext } from "../context/SortingContext";

export const useSorting = () => {
  const context = useContext(SortingContext);
  if (!context) {
    throw new Error("useSorting must be used within a SortingProvider");
  }
  return context;
};
