import React, { useState } from 'react';

import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/core';

//EMPTY REGISTER STATE
const emptyRegisterState = {
  email: '',
  password: '',
};

export default function Register() {
  //REGISTER STATE
  const [registerState, setRegisterState] = useState(emptyRegisterState);

  //INPUT CHANGE
  function handleInputChange(ev) {
    const { id, value } = ev.target;

    setRegisterState({
      ...registerState,
      [id]: value,
    });
  }

  //INPUT SUBMIT
  function handleRegisterSubmit(ev) {
    ev.preventDefault();

    setRegisterState(emptyRegisterState);
  }

  //REGISTER STATE DESTRUCTURING FOR INPUT VALUES
  const { email, password } = registerState;

  return (
    <Flex justify="center">
      <Flex as="form" direction="column" onSubmit={handleRegisterSubmit}>
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
          Register
        </Button>
      </Flex>
    </Flex>
  );
}
