import { Link } from "react-router-dom";
import LanguageSelectorButton from "../LanguageSelectorButton/LanguageSelectorButton";
import { APP_ROUTES } from "../../routes/route.constants";
import LanguageSelectorModal from "../LanguageSelectorModal/LanguageSelectorModal";
import { useLanguageSelectorModal } from "../../hooks/useLanguageSelectorModal";

import styles from "./Header.module.scss";

const Header = () => {
  const { showModal } = useLanguageSelectorModal();

  return (
    <header className={styles.header}>
      <Link to={APP_ROUTES.HOME}>
        <h1>Fever Pets&#174;</h1>
      </Link>

      <LanguageSelectorButton />
      {showModal && <LanguageSelectorModal />}
    </header>
  );
};

export default Header;
