import { useState, useEffect } from 'react';
import { repositoriesUrl } from '../utils/constants'

import { useQuery } from '@apollo/react-hooks';
import { GET_REPOSITORIES } from '../graphql/queries';


const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery(
    GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    }
  );
  const [repositories, setRepositories] = useState();

  const fetchRepositories = async () => {
    const response = await data;
    setRepositories(response?.repositories);
  };

  useEffect(() => {
    fetchRepositories();
  }, [loading]);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;