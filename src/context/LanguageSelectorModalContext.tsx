import { createContext, useState, ReactElement } from "react";

type LanguageSelectorModalContextProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LanguageSelectorModalContext = createContext<
  LanguageSelectorModalContextProps | undefined
>(undefined);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const LanguageSelectorModalProvider = ({
  children,
}: ChildrenType): ReactElement => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const contextValue: LanguageSelectorModalContextProps = {
    showModal,
    setShowModal,
  };

  return (
    <LanguageSelectorModalContext.Provider value={contextValue}>
      {children}
    </LanguageSelectorModalContext.Provider>
  );
};
