import { useState, useContext } from 'react';

import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';

import { useApolloClient } from '@apollo/client';


import AuthStorageContext from '../contexts/AuthStorageContext';



const useSignIn = () => {
  const [authorize] = useMutation(SIGN_IN)
  const authStorage = useContext(AuthStorageContext);
  const client = useApolloClient();

    const signIn = async({username, password}) => {
        try{
            const response = await authorize( {variables: { username, password } })
            const token = response.data.authorize.accessToken
            authStorage.setAccessToken(token)
            console.log('Token succesfully added. Token:', token)
            client.resetStore();
            return response
        } catch (e) {
            console.log(e)
            return null
        }
    }

    return [signIn];
};

export default useSignIn;