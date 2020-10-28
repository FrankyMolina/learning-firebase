import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { useAuth } from '../api/auth/AuthProvider';

import { Flex, Link, Button } from '@chakra-ui/core';

export default function Navbar() {
  const { currentUser, logout } = useAuth();

  function handleLogout() {

    //should be an async await function with try catch
    logout();
  }

  return (
    <Flex justify="space-evenly" p="1rem" backgroundColor="brand.green">
      <Link as={ReactLink} to="/">
        Home
      </Link>

      {!currentUser ? (
        <>
          <Link as={ReactLink} to="/Signup">
            Signup
          </Link>

          <Link as={ReactLink} to="/login">
            Login
          </Link>
        </>
      ) : (
        <Button onClick={handleLogout}>Logout</Button>
      )}
    </Flex>
  );
}
