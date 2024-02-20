import { createContext, ReactElement, useState, useEffect } from "react";
import { IPet } from "../interfaces/IPet";
import { API_URL } from "../api/api.constants";

type FetchPetsContextProps = {
  pets: IPet[] | null;
  loading: boolean;
  error: string | null;
};

export const FetchPetsContext = createContext<
  FetchPetsContextProps | undefined
>(undefined);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const FetchPetsProvider = ({ children }: ChildrenType) => {
  const [pets, setPets] = useState<IPet[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async (): Promise<IPet[]> => {
      const pets = await fetch(`${API_URL}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${res.status}`
            );
          }

          return res.json();
        })
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
          setError(err.message);
          setPets(null);
        })
        .finally(() => {
          setLoading(false);
        });

      return pets;
    };

    fetchPets().then((pets) => {
      setPets(pets);
      setError(null);
    });
  }, []);

  const contextValue: FetchPetsContextProps = {
    pets,
    loading,
    error,
  };

  return (
    <FetchPetsContext.Provider value={contextValue}>
      {children}
    </FetchPetsContext.Provider>
  );
};
