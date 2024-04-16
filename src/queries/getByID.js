import { gql } from "graphql-request";

export const getByID = gql`
  query getById($articleID: ID!) {
    article(where: { id: $articleID }) {
      category
      date
      headline
      id
      image {
        fileName
        url
      }
      markdownContent
    }
  }
`;
