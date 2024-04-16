import { gql } from "graphql-request";

export const getCategoryNews = gql`
  query getCategoryNews($category: String!) {
    articles(where: { category: $category }) {
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
