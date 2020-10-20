import React from 'react';

import { Flex, Heading } from '@chakra-ui/core';

export default function SecuredPage() {
  return (
    <Flex backgroundColor="brand.orange">
      <Heading as="h2">Wait there! ¿Who are you?</Heading>
    </Flex>
  );
}
