import { gql } from "graphql-tag";
export default gql`
query getLangs {
  i18NLocales {
    name
    code
    documentId
  }
}
`;
