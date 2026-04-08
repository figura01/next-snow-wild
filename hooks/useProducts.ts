import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "@/graphql/queries/products";
import { GetProductsResponse } from "@/types/product";

export function useProducts(category?: string) {
  const { data, loading, error } = useQuery<GetProductsResponse>(GET_PRODUCTS, {
    variables: {
      categories: category ? [category] : undefined,
    },
  });

  return {
    data: data?.products,
    isLoading: loading,
    error,
  };
}
