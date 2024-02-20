import { Link } from "react-router-dom";
import { IPet } from "../../interfaces/IPet";
import brokenImage from "../../assets/broken-image.svg";
import { gramsToKilograms } from "../../utilities/gramsToKilograms";
import { convertToCentimetersOrMeters } from "../../utilities/convertToCentimeterOrMeter";
import { APP_ROUTES } from "../../routes/route.constants";
import { PET_THUMB_SIZE } from "./PetThumbnail.constants";
import { FormattedMessage } from "react-intl";

import styles from "./PetThumbnail.module.scss";

type PetThumbnailProps = {
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

const PetThumbnail = ({ pet }: PetThumbnailProps) => {
  const { id, name, kind, weight, height, length, photo_url } = pet;

  return (
    <Link to={APP_ROUTES.PET} state={{ pet }}>
      <div className={styles.thumbnail} key={id}>
        <img
          src={photo_url}
          alt={`this is ${name}`}
          className={styles.image}
          height={PET_THUMB_SIZE.HEIGHT}
          width={PET_THUMB_SIZE.WIDTH}
          onError={(ev) => handleOnError(ev)}
        />
        <div className={styles.infoContainer}>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petThumbnail.name"
                defaultMessage="Name:"
              />
            </span>
            <span>{name}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petThumbnail.kind"
                defaultMessage="Kind:"
              />
            </span>
            <span>{kind}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petThumbnail.weight"
                defaultMessage="Weight:"
              />
            </span>
            <span>{gramsToKilograms(weight)}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petThumbnail.height"
                defaultMessage="Height:"
              />
            </span>
            <span>{convertToCentimetersOrMeters(height)}</span>
          </p>
          <p>
            <span className={styles.label}>
              <FormattedMessage
                id="app.petThumbnail.length"
                defaultMessage="Length:"
              />
            </span>
            <span>{convertToCentimetersOrMeters(length)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PetThumbnail;
