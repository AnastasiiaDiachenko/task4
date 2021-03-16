import React, {useState} from 'react';
import Footer from './components/Footer';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { variables } from './helpers/styleVariables';
import { AppContext } from "./helpers/context";

const MainTheme = {
  color: `#${variables.colors.MAIN}`,
  bg_color: `#${variables.background.BUTTON}`,
  padding: '10px'
};

import GlobalStyle from "./globalStyles";

const App = () => {
  const [isSearch, setSearch] = useState(true);
  const [film, setFilm] = useState(null);
  const openSearch = () => setSearch(true);
  const openFilmDetails = () => setSearch(false);

  const defaultValue = {
      film,
      setFilm: (film) => {
          setFilm(film)
          openFilmDetails();
      }
  };

  return (
      <div className="app">
        <GlobalStyle />
        <ThemeProvider theme={ MainTheme }>
            <AppContext.Provider value={defaultValue}>
                <Header
                    isSearch={isSearch}
                    openSearch={openSearch}
                />
                <MainContent />
                <Footer />
            </AppContext.Provider>
        </ThemeProvider>
      </div>
  );
}

export default App;
