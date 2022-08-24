import gql from "graphql-tag";

export const CURRENT_USER = gql`
    query currentUser {
        currentUser {
          id
          email
        }
    }        
`;

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          id
          email
        }
    }
`;

export const SIGNUP = gql`
    mutation signup($email: String!, $password: String!) {
        signup(email: $email, password: $password) {
          id
          email
        }
    }
`;

export const LOGOUT = gql`
    mutation logout {
      logout {
        id
      }
    }
`;
