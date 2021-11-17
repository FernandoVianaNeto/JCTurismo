import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

import { store, persistor } from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <script src="https://sdk.mercadopago.com/js/v2" />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyles />
          <App />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
