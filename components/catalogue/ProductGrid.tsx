"use client";

import { PRODUCTS_QUERY } from "@/graphql/queries/products";
import { useQuery } from "@apollo/client/react";
import ProductCard from "@/components/catalogue/ProductCard";
import SearchBar from "./SearchBar";

type Variant = {
  id: string;
  size: string;
};

type Product = {
  id: string;
  name: string;
  image: string;
  pricePerDay: number;
  category: string;
  variants: Variant[];
};

type ProductsQueryResult = {
  products: Product[];
};

type ProductsQueryVariables = {
  search?: string;
  categories?: Category[];
  sizes?: string[];
};

type Category = "SKI" | "SNOWBOARD" | "SHOES" | "POLES" | "HELMET";

export default function ProductGrid() {
  const { data, loading, error } = useQuery<
    ProductsQueryResult,
    ProductsQueryVariables
  >(PRODUCTS_QUERY);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data?.products.map((product) => (
        <ProductCard product={product} key={product.name} />
      ))}
    </ul>
  );
}
