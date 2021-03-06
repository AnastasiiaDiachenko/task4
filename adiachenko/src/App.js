import React from 'react';
import Footer from './components/Footer';
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { variables } from './helpers/styleVariables';

const MainTheme = {
  color: `#${variables.colors.MAIN}`,
  bg_color: `#${variables.background.BUTTON}`,
  padding: '10px'
};

import GlobalStyle from "./globalStyles";

function App() {
  return (
      <div className="app">
        <GlobalStyle />
        <ThemeProvider theme={ MainTheme }>
          <Header />
          <MainContent />
          <Footer/>
        </ThemeProvider>
      </div>
  );
}

export default App;
