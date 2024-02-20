import Icon from "@mdi/react";
import { mdiCloseThick } from "@mdi/js";
import esFlag from "../../assets/flags/spain_flag.svg";
import enFlag from "../../assets/flags/uk_flag.svg";
import { useLanguageSelectorModal } from "../../hooks/useLanguageSelectorModal";
import { useLanguageSelector } from "../../hooks/useLanguageSelector";

import styles from "./LanguageSelectorModal.module.scss";

const LanguageSelectorModal = () => {
  const { showModal, setShowModal } = useLanguageSelectorModal();
  const { selectLanguage } = useLanguageSelector();

  const closeModal = () => {
    setShowModal(false);
  };

  const onSelectLanguage = (lang: string) => {
    selectLanguage(lang);
    closeModal();
  };

  return (
    <div className={`${styles.modal} ${showModal ? styles.active : ""}`}>
      <button className={styles.closeButton} onClick={() => closeModal()}>
        <Icon path={mdiCloseThick} size={1} />
      </button>

      <div>
        <p className={styles.item} onClick={() => onSelectLanguage("es")}>
          <img className={styles.button} src={esFlag} alt={`flag-es`} />
          <span>Español</span>
        </p>
        <p className={styles.item} onClick={() => onSelectLanguage("en")}>
          <img className={styles.button} src={enFlag} alt={`flag-en`} />
          <span>English</span>
        </p>
      </div>
    </div>
  );
};

export default LanguageSelectorModal;
