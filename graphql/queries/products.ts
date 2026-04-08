import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts($categories: [Category!]) {
    products(categories: $categories) {
      id
      name
      category
      image
      pricePerDay
      sizeType
      variants {
        id
        size
        stockItems {
          id
        }
      }
    }
  }
`;
