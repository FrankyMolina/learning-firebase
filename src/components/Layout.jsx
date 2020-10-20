import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

import { Flex, Box } from '@chakra-ui/core';

export default function Layout({ children }) {
  return (
    <Flex h="100vh" direction="column" justify="space-between">
      <Navbar />

      <Box as="main" flex="1" p="1rem">
        {children}
      </Box>

      <Footer />
    </Flex>
  );
}
