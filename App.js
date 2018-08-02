import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import Navigator from './Navigator'

const client = new ApolloClient({
  link: new HttpLink({
    uri:"https://api.graph.cool/simple/v1/cjkansbxs382d0106jvgmmn3l"
  }),
    cache : new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}
