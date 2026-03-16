export const PRODUCTS_QUERY = `
    query Products {
    products {
        id
        name
        image
        pricePerDay

        variants {
        id
        size
        }
    }
    }
`;
