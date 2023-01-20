import { gql } from "@apollo/client";

export const GET_USER_BY_ID = gql`
    query User (
        $id: ID!
    ) {
        user (
            id: $id
        ) {
            name 
            handle
            tweets {
                likes
                content
            }
        }
    }
`;