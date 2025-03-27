import { gql } from "graphql-tag";
export default gql`
query Query($status: PublicationStatus) {
    pages(status: PUBLISHED) {
      LandingHero {
        Title
        SubTitle
        LandingHeroBackground {
          url
        }
        CtasLanding {
          Label
          Link
          id
          newWindow
          variant
        }
      }
      name
      slug
      locale
    }
  }
`;