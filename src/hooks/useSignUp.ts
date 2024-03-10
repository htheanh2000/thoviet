import { ISignUp, signUp } from '@/api/auth';
import { useState, useEffect } from 'react';

// Custom hook for fetching data from an API
function useSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createUser = async (data: ISignUp) => {
    setIsLoading(true);
    try {
       await signUp(data) ;
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [createUser, isLoading, error];
}


export default useSignUp