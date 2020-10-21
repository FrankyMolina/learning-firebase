import React, { useContext, createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

//we create the auth context
export const AuthContext = createContext(null);

//function to allow us get context value all over the app
export function useAuth() {
  return useContext(AuthContext);
}

//auth provider component to wrap the other components (take a look to return)
export default function AuthProvider({ children }) {
  //state to know when we have user
  const [currentUser, setCurrentUser] = useState();

  //firebase method to create user with email & pw
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //firebase method to change the state whenever a user is created, inside useEffect to mount it only one time when we render our component
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    //it will unsubscribe the onAuthStateChanged listener whenever we unmount this component.
    return unsubscribe;
  }, []);

  //useContext value based on currentUser, and our signup function
  const value = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
