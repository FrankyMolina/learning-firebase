import React, { useState } from 'react';

//auth context
import { useAuth } from '../api/auth/AuthProvider';

import {
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/core';

//EMPTY REGISTER STATE
const emptySignupState = {
  email: '',
  password: '',
};

export default function Register() {
  //REGISTER STATE
  const [signupState, setSignupState] = useState(emptySignupState);

  //our function signup from our auth context
  const { signup } = useAuth();

  //INPUT SUBMIT ------- create some kind of error handling here, making this an ASYNC function and creating a new state for errors
  function handleRegisterSubmit(ev) {
    ev.preventDefault();

    //lets signup with our imported function from auth context
    signup(signupState.email, signupState.password);
    setSignupState(emptySignupState);
  }

  //INPUT CHANGE
  function handleInputChange(ev) {
    const { id, value } = ev.target;

    setSignupState({
      ...signupState,
      [id]: value,
    });
  }

  //REGISTER STATE DESTRUCTURING FOR INPUT VALUES
  const { email, password } = signupState;

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
          Signup
        </Button>
      </Flex>
    </Flex>
  );
}
