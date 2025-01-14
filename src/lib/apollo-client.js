import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const endPoint = import.meta.env.LOCAL_CMS;

const client = new ApolloClient({
  uri: endPoint, // Cambia esto al endpoint de tu GraphQL
  cache: new InMemoryCache(),
});

export default client;
