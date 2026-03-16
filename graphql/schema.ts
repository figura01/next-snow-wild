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
    products: [Product!]!
  }

`;
