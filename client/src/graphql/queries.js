import { gql, fragment } from 'apollo-boost';

import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
            cursor
            node {
                ...RepositoryDetails
            }
        }
    }
  }
  ${REPOSITORY_DETAILS}
`;

// Returns null if the token send in HTTP Header doesn't exist
// If it does, returns users id and username
export const IS_AUTHORIZED = gql`
query {
    authorizedUser {
      id
      username
    }
}
`;

