import { createContext, useState, useEffect, ReactElement } from "react";
import { useCookies } from "react-cookie";
import { IPet } from "../interfaces/IPet";
import { COOKIE_NAME } from "../components/PetOfTheDay/PetOfTheDay.constants";
import { getNextDay } from "../utilities/getNextDay";
import { useFetchPets } from "../hooks/useFetchPets";
import { getRandomPet } from "../utilities/getRandomPet";

type PetOfTheDayContextProps = {
  petOfTheDay: IPet | null;
  updatePetOfTheDay: () => void;
};

export const PetOfTheDayContext = createContext<
  PetOfTheDayContextProps | undefined
>(undefined);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const PetOfTheDayProvider = ({ children }: ChildrenType) => {
  const { pets } = useFetchPets();
  const [petOfTheDay, setPetOfTheDay] = useState<IPet | null>(null);
  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  useEffect(() => {
    const storedPetOfTheDay: IPet = cookies.petOfTheDay;

    setPetOfTheDay(storedPetOfTheDay ? storedPetOfTheDay : null);
  }, [cookies.petOfTheDay]);

  const updatePetOfTheDay = () => {
    const today = new Date();
    const tomorrow = getNextDay(today);
    const newPetOfTheDay = getRandomPet(pets);

    setCookie(COOKIE_NAME, newPetOfTheDay, { expires: tomorrow });
    setPetOfTheDay(newPetOfTheDay);
  };

  const contextValue: PetOfTheDayContextProps = {
    petOfTheDay,
    updatePetOfTheDay,
  };

  return (
    <PetOfTheDayContext.Provider value={contextValue}>
      {children}
    </PetOfTheDayContext.Provider>
  );
};
