import {
  BrowserRouter as Router,
  useRoutes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import PetDetail from "./components/PetDetail/PetDetail";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { APP_ROUTES } from "./routes/route.constants";
import { SortingProvider } from "./context/SortingContext";
import { PetOfTheDayProvider } from "./context/PetOfTheDayContext";
import { FetchPetsProvider } from "./context/FetchPetsContext";
import { LanguageSelectorProvider } from "./context/LanguageSelectorContext";
import { LanguageSelectorModalProvider } from "./context/LanguageSelectorModalContext";

import "./App.module.scss";

function Routes() {
  const location = useLocation();

  const element = useRoutes([
    { path: APP_ROUTES.HOME, element: <HomePage /> },
    { path: APP_ROUTES.PET, element: <PetDetail pet={location.state?.pet} /> },
    { path: APP_ROUTES.NOT_FOUND, element: <ErrorPage /> },
  ]);

  return element;
}

function App() {
  return (
    <LanguageSelectorProvider>
      <LanguageSelectorModalProvider>
        <FetchPetsProvider>
          <PetOfTheDayProvider>
            <SortingProvider>
              <Router>
                <Header />
                <Routes />
              </Router>
            </SortingProvider>
          </PetOfTheDayProvider>
        </FetchPetsProvider>
      </LanguageSelectorModalProvider>
    </LanguageSelectorProvider>
  );
}

export default App;
