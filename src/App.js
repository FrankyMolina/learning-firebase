import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Login from './components/Login';
import Register from './components/Register';

import { Box, Heading } from '@chakra-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/register" component={Register} />

          <Route exact path="/">
            <Box backgroundColor="brand.purple">
              <Heading as="h1">i work!</Heading>
            </Box>
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
