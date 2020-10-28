import React, { useState } from 'react';
import { useAuth } from '../api/auth/AuthProvider';
import { useHistory } from 'react-router-dom';

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
  //history push
  const history = useHistory();
  //LOGIN STATE
  const [loginState, setLoginState] = useState(emptyLoginState);

  //our login function from our auth context
  const { login } = useAuth();
  //INPUT SUBMIT
  async function handleLoginSubmit(ev) {
    ev.preventDefault();

    try {
      await login(loginState.email, loginState.password);
      history.push('/private-page');
      setLoginState(emptyLoginState);
    } catch {
      console.log('something went wrong');
    }
  }

  //INPUT CHANGE
  function handleInputChange(ev) {
    const { id, value } = ev.target;

    setLoginState({
      ...loginState,
      [id]: value,
    });
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
