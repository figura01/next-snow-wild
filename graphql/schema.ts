export const typeDefs = `#graphql

  enum Category {
    ALL
    SKI
    SNOWBOARD
    SHOES
    POLES
    HELMET
  }

  enum SizeType {
    CM
    EU
    LETTER
  }

  type StockItem {
    id: ID!
  }

  type ProductVariant {
    id: ID!
    size: String!
    stockItems: [StockItem!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    category: Category!
    image: String!
    pricePerDay: Float!
    sizeType: SizeType!
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
