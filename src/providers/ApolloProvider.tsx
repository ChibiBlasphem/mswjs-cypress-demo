import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as BuiltinApolloProvider,
} from '@apollo/client';
import { ReactNode, useMemo } from 'react';

export function ApolloProvider({ children }: { children: ReactNode }) {
  const client = useMemo(() => {
    return new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
    });
  }, []);

  return (
    <BuiltinApolloProvider client={client}>{children}</BuiltinApolloProvider>
  );
}
