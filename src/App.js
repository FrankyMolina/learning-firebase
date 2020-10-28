import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from './api/auth/AuthProvider';

import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import SecuredPage from './components/SecuredPage';

import { Box, Heading, Spinner, Flex } from '@chakra-ui/core';

function App() {
  const { currentUser, isLoaded } = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        {!isLoaded ? (
          <Flex justify="center" p="1rem">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Flex>
        ) : (
          <Switch>
            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={Signup} />

            <Route exact path="/">
              <Box backgroundColor="brand.purple">
                <Heading as="h1">Welcome</Heading>
              </Box>
            </Route>

            {!currentUser ? (
              <Redirect to="/" />
            ) : (
              <Route exact path="/private-page" component={SecuredPage} />
            )}
          </Switch>
        )}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
