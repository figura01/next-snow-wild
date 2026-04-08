"use client";

import { useQuery } from "@apollo/client/react";
import { GET_PRODUCTS } from "@/graphql/queries/products";

interface IProduct {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  pricePerDay: number;
  sizeType: string;
  variants: {
    id: string;
    size: string;
  }[];
}

interface ProductsData {
  products: IProduct[];
}

export default function PopularProducts() {
  const { data, loading } = useQuery<ProductsData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="container py-16">
      <h2 className="text-2xl font-semibold mb-8">Produits populaires</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data?.products.slice(0, 6).map((product: IProduct) => (
          <div key={product.id} className="card">
            <h3 className="font-semibold mb-2">{product.name}</h3>

            <p className="text-muted mb-4">{product.category}</p>

            <button className="btn-primary w-full">Réserver</button>
          </div>
        ))}
      </div>
    </section>
  );
}
