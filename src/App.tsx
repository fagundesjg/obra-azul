import React from 'react';
import { Provider } from 'react-redux';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/GlobalStyles';
import './configs/ReactotronConfig';
import store from './store';
import { Routes } from './routes';
import { AppContainer } from './components';

declare global {
  interface Console {
    tron: any;
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <CssBaseline />
        <GlobalStyle />
        <BrowserRouter>
          <AppContainer>
            <Routes />
          </AppContainer>
        </BrowserRouter>
      </StylesProvider>
    </Provider>
  );
};

export default App;
