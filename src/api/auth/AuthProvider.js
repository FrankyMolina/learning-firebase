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

  //to prevent the mount of component as if it wasnt logged in
  const [isLoaded, setIsLoaded] = useState(false);

  //firebase method to create user with email & pw
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  //firebase method to log in with email & pw
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  //logout
  function logout() {
    return auth.signOut();
  }

  //firebase method to change the state whenever a user is created, inside useEffect to mount it only one time when we render our component
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (!isLoaded) {
        setIsLoaded(true);
      }
    });

    //it will unsubscribe the onAuthStateChanged listener whenever we unmount this component.
    return unsubscribe;
  }, []);

  //useContext value based on currentUser, and our signup function
  const value = {
    currentUser,
    signup,
    login,
    logout,
    isLoaded,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
