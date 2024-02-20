import { useContext } from "react";
import { LanguageSelectorContext } from "../context/LanguageSelectorContext";

export const useLanguageSelector = () => {
  const context = useContext(LanguageSelectorContext);

  if (!context) {
    throw new Error(
      "useLanguageSelector must be used within a LanguageSelectorProvider"
    );
  }
  return context;
};
