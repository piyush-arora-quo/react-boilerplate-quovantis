import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import './app.css';
import store from './config/store';
import StorageService from './util/services/StorageService';
import LogService from './util/services/LogService';
import theme from './util/globals/theme';
import AppRoutes from './Routing/AppRoutes';

const App = () => {
  useEffect(() => {
    StorageService.setItem('AppLaunched', 'Yes');
    LogService.log('AppLaunched');
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
