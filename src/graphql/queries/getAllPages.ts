import { gql } from "graphql-tag";
export default gql`
query Query($locale: I18NLocaleCode) {
  pages(locale: $locale) {
    name
    slug
    phosphorIcon
    documentId
  }
}
`;
