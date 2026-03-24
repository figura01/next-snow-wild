import { gql } from "@apollo/client";

export type Category = "SKI" | "SNOWBOARD" | "SHOES" | "POLES" | "HELMET";

export type ProductsQueryVariables = {
  search?: string;
  categories?: Category[];
  sizes?: string[];
};

export type Variant = {
  id: string;
  size: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  category: Category;
  variants: Variant[];
};

export type ProductsQueryResult = {
  products: Product[];
};

export const PRODUCTS_QUERY = gql`
  query Products($search: String, $categories: [Category!], $sizes: [String!]) {
    products(search: $search, categories: $categories, sizes: $sizes) {
      id
      name
      image
      pricePerDay
      category
      variants {
        id
        size
      }
    }
  }
`;
