import { createContext, useState, ReactElement } from "react";

type SortingContextProps = {
  sortBy: string;
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
};

export const SortingContext = createContext<SortingContextProps | undefined>(
  undefined
);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const SortingProvider = ({ children }: ChildrenType): ReactElement => {
  const [sortBy, setSortBy] = useState<string>("");

  const contextValue: SortingContextProps = {
    sortBy,
    setSortBy,
  };

  return (
    <SortingContext.Provider value={contextValue}>
      {children}
    </SortingContext.Provider>
  );
};
