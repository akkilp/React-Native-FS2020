import { gql } from 'apollo-boost';


export const REPOSITORY_DETAILS = gql`
    fragment RepositoryDetails on Repository {
        description
        language
        stargazersCount
        forksCount
        reviewCount
        ratingAverage
        ownerAvatarUrl
        fullName
    }
`

