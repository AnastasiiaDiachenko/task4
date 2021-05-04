import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { AppRouter } from './routes';
import { variables } from './helpers/styleVariables';
import store from './store';
import GlobalStyle from './globalStyles';

const MainTheme = {
  color: `#${variables.colors.MAIN}`,
  bg_color: `#${variables.background.BUTTON}`,
  padding: '10px'
};

const App = () => (
  <div className="app">
    <GlobalStyle />
    <ThemeProvider theme={MainTheme}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </ThemeProvider>
  </div>
);

export default App;
