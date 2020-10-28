import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//we wrap everything in our authprovider component, and get our useAuth funct to know if we have a currentUser
import AuthProvider from './api/auth/AuthProvider';

import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from './theme/index';

ReactDOM.render(
  <ThemeProvider theme={customTheme}>
    <AuthProvider>
      <CSSReset />
      <App />
    </AuthProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
