import { gql, fragment } from 'apollo-boost';

import { REPOSITORY_DETAILS } from './fragments';

/* export const CREATE_USER = gql`
    mutation createUser($username: String!, $password: String!) {
        createUser(
            username: $username,
            password: $password
        ){
            username,
            createdAt
        }
    }
    }
` */

export const SIGN_IN = gql`
    mutation signIn($username: String!, $password: String!){
        authorize(credentials: { 
                                username: $username,
                                password: $password
                                }
                  ){
                    accessToken
                   }
        }
`