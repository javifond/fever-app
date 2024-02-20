import { useContext } from "react";
import { IHealth } from "../../interfaces/IHealth";
import { calculateHealth } from "./HealthyBadge.utils";
import { HEALTH_VALUES } from "./HealthyBadge.constants";
import { defineMessages, MessageDescriptor, IntlContext } from "react-intl";

import styles from "./HealthyBadge.module.scss";

type HealthyBadgeProps = {
  health: IHealth;
};

const labels = defineMessages({
  veryHealthy: { id: "app.badge.very-healthy", defaultMessage: "Very Healthy" },
  healthy: { id: "app.badge.healthy", defaultMessage: "Healthy" },
  unhealthy: { id: "app.badge.unhealthy", defaultMessage: "Unhealthy" },
  unknown: { id: "app.badge.unknown", defaultMessage: "Unknown" },
});

type HealthClassAndLabel = {
  className: string;
  label: MessageDescriptor;
};

const getHealthClassAndLabel = (
  calculatedHealth: string
): HealthClassAndLabel => {
  switch (calculatedHealth) {
    case HEALTH_VALUES.VERY_HEALTHY:
      return {
        className: HEALTH_VALUES.VERY_HEALTHY,
        label: labels.veryHealthy,
      };

    case HEALTH_VALUES.HEALTHY:
      return {
        className: HEALTH_VALUES.HEALTHY,
        label: labels.healthy,
      };

    case HEALTH_VALUES.UNHEALTHY:
      return {
        className: HEALTH_VALUES.UNHEALTHY,
        label: labels.unhealthy,
      };

    default:
      return {
        className: HEALTH_VALUES.UNKNOWN,
        label: labels.unknown,
      };
  }
};

const HealthyBadge = ({ health }: HealthyBadgeProps) => {
  const intl = useContext(IntlContext);
  const calculatedHealth = calculateHealth(health);
  const { className, label } = getHealthClassAndLabel(calculatedHealth);

  return (
    <p className={`${styles.badge} ${styles[className]}`}>
      {intl.formatMessage(label)}
    </p>
  );
};

export default HealthyBadge;
