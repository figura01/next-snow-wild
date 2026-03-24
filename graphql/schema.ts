export const typeDefs = `#graphql

  enum Category {
    SKI
    SNOWBOARD
    SHOES
    POLES
    HELMET
  }

  type ProductVariant {
    id: ID!
    size: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    category: Category!
    image: String!
    pricePerDay: Float!
    variants: [ProductVariant!]!
  }

  type Query {
    products(
      search: String
      categories: [Category!]
      sizes: [String!]
    ): [Product!]!
  }

  type AvailableVariant {
    variantId: ID!
    size: String!
    availableStock: Int!
  }

  type AvailableProduct {
    productId: ID!
    name: String!
    pricePerDay: Float!
    variants: [AvailableVariant!]!
  }

  extend type Query {
    availableProducts(startDate: String!, endDate: String!): [AvailableProduct!]!
  }
`;
