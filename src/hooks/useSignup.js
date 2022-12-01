import { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log('User signed up ->', userCredentials.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return { error, signup };
};
