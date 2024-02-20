import { IPet } from "../../interfaces/IPet";
import { IHealth } from "../../interfaces/IHealth";
import { PET_IMAGE_SIZE } from "./PetDetail.constants";
import { convertToCentimetersOrMeters } from "../../utilities/convertToCentimeterOrMeter";
import { gramsToKilograms } from "../../utilities/gramsToKilograms";
import HealthyBadge from "../HealthyBadge/HealthyBadge";
import brokenImage from "../../assets/broken-image.svg";
import { FormattedMessage } from "react-intl";

import styles from "./PetDetail.module.scss";

type PetDetailProps = {
  pet: IPet;
};

/**
 * Broken Images handler.
 *
 * @param event onError Broken Image
 */
const handleOnError = (
  event: React.SyntheticEvent<HTMLImageElement, Event>
) => {
  const image = event.target as HTMLImageElement;

  image.src = brokenImage;
  image.className = styles.brokenImage;
};

const PetDetail = ({ pet }: PetDetailProps) => {
  const {
    name,
    kind,
    weight,
    height,
    length,
    photo_url,
    description,
    number_of_lives,
  } = pet;

  const health: IHealth = {
    kind,
    weight,
    height,
    length,
    number_of_lives,
  };

  return (
    <section>
      <header className={styles.header}>
        <h2>{name}</h2>
        <HealthyBadge health={health} />
      </header>

      <div className={styles.wrapper}>
        <img
          className={styles.image}
          src={photo_url}
          alt={`I'm ${name}`}
          height={PET_IMAGE_SIZE.HEIGHT}
          width={PET_IMAGE_SIZE.WIDTH}
          onError={(e) => handleOnError(e)}
        />
        <div className={styles.details}>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petDetail.kind"
                defaultMessage="Kind:"
              />
            </span>
            <span>{kind}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petDetail.weight"
                defaultMessage="Weight:"
              />
            </span>
            <span>{gramsToKilograms(weight)}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petDetail.height"
                defaultMessage="Height:"
              />
            </span>
            <span>{convertToCentimetersOrMeters(height)}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petDetail.length"
                defaultMessage="Length:"
              />
            </span>
            <span>{convertToCentimetersOrMeters(length)}</span>
          </p>
        </div>
      </div>
      <div className={styles.description}>
        <p className={styles.label}>
          <FormattedMessage
            id="app.petDetail.description"
            defaultMessage="Description:"
          />
        </p>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default PetDetail;
