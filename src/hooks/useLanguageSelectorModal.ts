import { useContext } from "react";
import { LanguageSelectorModalContext } from "../context/LanguageSelectorModalContext";

export const useLanguageSelectorModal = () => {
  const context = useContext(LanguageSelectorModalContext);

  if (!context) {
    throw new Error(
      "useLanguageSelectorModal must be used within a useLanguageSelectorModalProvider"
    );
  }
  return context;
};
