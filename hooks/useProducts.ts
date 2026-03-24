import { useQuery } from "@apollo/client/react";
import { PRODUCTS_QUERY } from "@/graphql/queries/products";
import { useCatalogStore } from "@/store/CatalogStore";

export function useProducts() {
  const { search, categories, sizes } = useCatalogStore();

  const { data, loading, error } = useQuery(PRODUCTS_QUERY, {
    variables: {
      search,
      categories,
      sizes,
    },
  });

  return {
    products: data?.products,
    isLoading: loading,
    error,
  };
}
