import { IPet } from "../../interfaces/IPet";
import { sortPetsByParameter } from "../../utilities/sortPetsByParameter";
import { useSorting } from "../../hooks/useSorting";
import PetSortingSelector from "../PetSortingSelector/PetSortingSelector";
import PetThumbnail from "../PetThumbnail/PetThumbnail";
import { useFetchPets } from "../../hooks/useFetchPets";
import { FormattedMessage } from "react-intl";

import styles from "./PetsLobby.module.scss";

const PetsLobby = () => {
  const { pets, loading, error } = useFetchPets();
  const { sortBy } = useSorting();

  // TODO[JB]: Implement a visual loading component.
  if (loading) {
    return (
      <p>
        <FormattedMessage id="app.loading" defaultMessage="Loading..." />
      </p>
    );
  }

  // TODO[JB]: Implement a visual error component.
  if (error) {
    return (
      <div>
        <FormattedMessage
          id="app.error"
          defaultMessage={`There is a problem fetching the pets - ${error}`}
          values={{ error }}
        />
      </div>
    );
  }

  if (pets) {
    const sortedPets: IPet[] = sortPetsByParameter(pets, sortBy);

    return (
      <section className={styles.lobby}>
        <h3 className={styles.title}>
          <FormattedMessage
            id="app.petsLobby.title"
            defaultMessage="Our Beloved Pets"
          />
        </h3>

        <PetSortingSelector />

        <div className={styles.thumbnailContainer}>
          {sortedPets.map((pet, i) => (
            <PetThumbnail pet={pet} key={i} />
          ))}
        </div>
      </section>
    );
  }
};

export default PetsLobby;
