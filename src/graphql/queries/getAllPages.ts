import { gql } from "graphql-tag";
export default gql`
  query ExampleQuery {
    pages {
    documentId
      name
      slug
      phosphorIcon
    }
  }
`;
