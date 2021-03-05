import { gql, useMutation, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const USER_QUERY = gql`
  query CurrentUser($userId: ID!) {
    user(userId: $userId) {
      id
      firstName
      lastName
    }
  }
`;

const UPDATE_USER_MUTATION = gql`
  mutation UpdateCurrentUser($userId: ID!, $firstName: string!) {
    user(userId: $userId, firstName: $firstName) {
      id
      firstName
      lastName
    }
  }
`;

export function GraphqlQuery() {
  const { data: queryData } = useQuery(USER_QUERY, {
    variables: {
      userId: 21,
    },
  });

  const [updateUser, { data: mutationData }] = useMutation(
    UPDATE_USER_MUTATION
  );

  useEffect(() => {
    updateUser({
      variables: {
        userId: 21,
        firstName: 'Chris',
      },
    });
  }, [updateUser]);

  useEffect(() => {
    console.log(queryData);
  }, [queryData]);

  useEffect(() => {
    console.log(mutationData);
  }, [mutationData]);

  return null;
}
