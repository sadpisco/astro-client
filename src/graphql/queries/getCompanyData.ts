import { gql } from "graphql-tag";
export default gql`
query getCompanyData {
  companyData {
    CompanyAddress
    CompanyEmail
    CompanyName
    PhoneNumber
    Logo {
      documentId
      ext
      hash
      previewUrl
      url
    }
  }
}
`;
