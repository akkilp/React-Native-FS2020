import { useState, useEffect } from 'react';
import { repositoriesUrl } from '../utils/constants'

import { useQuery } from '@apollo/react-hooks';
import { IS_AUTHORIZED } from '../graphql/queries';


const useIsAuthorized = () => {
  const { data, error, loading } = useQuery(
    IS_AUTHORIZED, {
    fetchPolicy: 'cache-and-network',
    }
  );
  const [isAuthorized, setAuthorized] = useState();

  const checkAuthorization = async () => {
    const response = await data;
    setAuthorized(response?.authorizedUser?.id)
  };

  useEffect(() => {
    checkAuthorization()
  });

  return { isAuthorized, loading };
};

export default useIsAuthorized;