import { useQuery } from "@tanstack/react-query";
import { fetchGraphQL } from "@/graphql/client";
import { PRODUCTS_QUERY } from "@/graphql/queries/products";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],

    queryFn: async () => {
      const data = await fetchGraphQL(PRODUCTS_QUERY);
      return data.products;
    },
  });
}
