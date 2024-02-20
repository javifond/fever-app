import { usePetOfTheDay } from "../../hooks/usePetOfTheDay";
import { FormattedMessage } from "react-intl";
import PetDetail from "../PetDetail/PetDetail";

import styles from "./PetOfTheDay.module.scss";

const PetOfTheDay = () => {
  const { petOfTheDay, updatePetOfTheDay } = usePetOfTheDay();

  return (
    <div className={styles.container}>
      {petOfTheDay && (
        <>
          <h3 className={styles.title}>
            <FormattedMessage
              id="app.petOfTheDay.title"
              defaultMessage="Our Pet of the day"
            />
          </h3>
          <PetDetail pet={petOfTheDay} />
        </>
      )}
      {!petOfTheDay && (
        <button className={styles.button} onClick={updatePetOfTheDay}>
          <FormattedMessage
            id="app.petOfTheDay.button"
            defaultMessage="Get Pet of the Day"
          />
        </button>
      )}
    </div>
  );
};

export default PetOfTheDay;
