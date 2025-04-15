import { gql } from "graphql-tag";
export default gql`
  query getAllPages {
    pages {
    documentId
      name
      slug
      phosphorIcon
    }
  }
`;
