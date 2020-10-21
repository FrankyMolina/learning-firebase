import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//we wrap everything in our authprovider component
import AuthProvider from './api/auth/AuthProvider';

import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';

import { Box, Heading } from '@chakra-ui/core';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />

            <Route exact path="/">
              <Box backgroundColor="brand.purple">
                <Heading as="h1">i work!</Heading>
              </Box>
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
