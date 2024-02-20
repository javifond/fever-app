import { createContext, ReactElement, useState } from "react";
import { IntlProvider } from "react-intl";
import English from "../assets/lang/en.json";
import Spanish from "../assets/lang/es.json";

type LanguageSelectorContextProps = {
  locale: string;
  selectLanguage: (lang: string) => void;
};

export const LanguageSelectorContext = createContext<
  LanguageSelectorContextProps | undefined
>(undefined);

const LANGUAGES = {
  ES: "es",
  EN: "en",
};

const getTranslationsByLanguage = (lang: string) => {
  switch (lang) {
    case LANGUAGES.ES:
      return Spanish;

    case LANGUAGES.EN:
      return English;

    default:
      return English;
  }
};

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const LanguageSelectorProvider = ({ children }: ChildrenType) => {
  // TODO[JB]: This value could be obtained from the
  // actual browser locale, although just for simplicity
  // it is hardcoded.
  const [locale, setLocale] = useState(LANGUAGES.EN);
  const [messages, setMessages] = useState(English);

  const selectLanguage = (lang: string) => {
    setLocale(lang);
    // Here, I decided to go for this simplistic solution,
    // to retrieve the translations, ideally we should be requesting
    // them from an endpoint. But this solution is sufficient for now.
    setMessages(getTranslationsByLanguage(lang));
  };

  const contextValue: LanguageSelectorContextProps = {
    locale,
    selectLanguage,
  };

  return (
    <LanguageSelectorContext.Provider value={contextValue}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </LanguageSelectorContext.Provider>
  );
};
