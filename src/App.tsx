import { useEffect } from 'react';
import { ApolloProvider } from 'providers/ApolloProvider';
import { RestQuery } from 'components/RestQuery';
import { GraphqlQuery } from 'components/GraphqlQuery';

function App() {
  useEffect(() => {
    fetch('/users/21')
      .then((res) => res.json())
      .then((d) => console.log(d));
  }, []);

  return (
    <ApolloProvider>
      <div data-testid="app-container">
        <RestQuery />
        <GraphqlQuery />
      </div>
    </ApolloProvider>
  );
}

export default App;
