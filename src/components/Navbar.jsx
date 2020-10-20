import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import { Flex, Link } from '@chakra-ui/core';

export default function Navbar() {
  return (
    <Flex justify="space-evenly" p="1rem" backgroundColor="brand.green">
      <Link as={ReactLink} to="/">
        Home
      </Link>

      <Link as={ReactLink} to="/register">
        Register
      </Link>

      <Link as={ReactLink} to="/login">
        Login
      </Link>
    </Flex>
  );
}
