import React, { useState } from 'react';

import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/core';

//EMPTY LOGIN STATE
const emptyLoginState = {
  email: '',
  password: '',
};

export default function Login() {
  //LOGIN STATE
  const [loginState, setLoginState] = useState(emptyLoginState);

  //INPUT CHANGE
  function handleInputChange(ev) {
    const { id, value } = ev.target;

    setLoginState({
      ...loginState,
      [id]: value,
    });
  }

  //INPUT SUBMIT
  function handleLoginSubmit(ev) {
    ev.preventDefault();

    setLoginState(emptyLoginState);
  }

  //LOGIN STATE DESTRUCTURING FOR INPUT VALUES
  const { email, password } = loginState;

  return (
    <Flex justify="center">
      <Flex as="form" direction="column" onSubmit={handleLoginSubmit}>
        <FormControl>
          <FormLabel pt="1rem">Email:</FormLabel>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
          />
          <FormHelperText>Put you email here</FormHelperText>

          <FormLabel pt="1rem">Password:</FormLabel>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handleInputChange}
          />
          <FormHelperText>Put you password here</FormHelperText>
        </FormControl>

        <Button type="submit" variantColor="teal" variant="ghost">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
