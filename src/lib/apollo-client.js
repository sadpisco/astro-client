import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const endPoint = import.meta.env.LOCAL_CMS;

const client = new ApolloClient({
  uri: endPoint,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'cache-first',
      errorPolicy: 'ignore',
    },
  },
  connectToDevTools: true,
});

export default client;
