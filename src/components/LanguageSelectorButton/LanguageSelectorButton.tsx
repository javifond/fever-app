import { useLanguageSelector } from "../../hooks/useLanguageSelector";
import esFlag from "../../assets/flags/spain_flag.svg";
import enFlag from "../../assets/flags/uk_flag.svg";
import { useLanguageSelectorModal } from "../../hooks/useLanguageSelectorModal";

import styles from "./LanguageSelectorButton.module.scss";

const LanguageSelectorButton = () => {
  const { setShowModal } = useLanguageSelectorModal();
  const { locale } = useLanguageSelector();
  let flag = esFlag;

  switch (locale) {
    case "en":
      flag = enFlag;
      break;
    case "es":
      flag = esFlag;
      break;
    default:
      flag = esFlag;
  }

  return (
    <img
      className={styles.languageSelector}
      src={flag}
      alt={`flag-${locale}`}
      onClick={() => setShowModal(true)}
    />
  );
};

export default LanguageSelectorButton;
