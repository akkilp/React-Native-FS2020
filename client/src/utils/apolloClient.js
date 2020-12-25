import ApolloClient from 'apollo-boost';
import {graphQLUrl} from './constants'
import Constants from 'expo-constants';

// authStorage is passed as variable
// On every request local storage is checked for user
// If the user exists, the token from local storage is used as user identification
// If user doesnt exist, token is empty array and the user is unidentified
const createApolloClient = (authStorage) => {
  return new ApolloClient({
    request: async (operation) => {
      try {
        const accessToken = await authStorage.getAccessToken();
        
        // Adds header for every request 
        operation.setContext({
          headers: {
            authorization: accessToken ? `Bearer ${accessToken}` : '',
          },
        });
      } catch (e) {
        console.log(e);
      }
    },
    // Process ENV variable that is configured through app.config.js
    uri: Constants.manifest.extra.APOLLO_URI,
  });
};

export default createApolloClient;