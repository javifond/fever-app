import { useSorting } from "../../hooks/useSorting";
import { SORT_BY_OPTIONS } from "./PetSortingSelector.constants";
import { FormattedMessage } from "react-intl";

import styles from "./PetSortingSelector.module.scss";

const PetSortingSelector = () => {
  const { sortBy, setSortBy } = useSorting();

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <label htmlFor="sort-select">
        <h3>
          <FormattedMessage id="app.sorting.title" defaultMessage="Order By:" />
        </h3>
      </label>
      <select
        className={styles.select}
        id="sort-select"
        value={sortBy}
        onChange={handleSortChange}
      >
        <option value={""}>
          <FormattedMessage
            id="app.sorting.options.select"
            defaultMessage="Select"
          />
        </option>
        <option value={SORT_BY_OPTIONS.WEIGHT}>
          <FormattedMessage
            id="app.sorting.options.weight"
            defaultMessage="Weight"
          />
        </option>
        <option value={SORT_BY_OPTIONS.LENGTH}>
          <FormattedMessage
            id="app.sorting.options.length"
            defaultMessage="Length"
          />
        </option>
        <option value={SORT_BY_OPTIONS.HEIGHT}>
          <FormattedMessage
            id="app.sorting.options.height"
            defaultMessage="Height"
          />
        </option>
        <option value={SORT_BY_OPTIONS.NAME}>
          <FormattedMessage
            id="app.sorting.options.name"
            defaultMessage="Name"
          />
        </option>
        <option value={SORT_BY_OPTIONS.KIND}>
          <FormattedMessage
            id="app.sorting.options.kind"
            defaultMessage="Kind"
          />
        </option>
      </select>
    </div>
  );
};

export default PetSortingSelector;
