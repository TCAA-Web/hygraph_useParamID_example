import { gql } from "graphql-request";

export const getAllNews = gql`
  query getAllNews {
    articles {
      date
      headline
      image {
        id
        fileName
        url
      }
      category
      id
      markdownContent
    }
  }
`;
