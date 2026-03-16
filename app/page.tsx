"use client";

import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div style={{ padding: 40 }}>
      <h1>Snow Wild</h1>

      <div>
        {data.map((product: any) => (
          <div key={product.id} style={{ marginBottom: 20 }}>
            <h2>{product.name}</h2>

            <p>{product.pricePerDay} € / jour</p>

            <div>
              Tailles :
              {product.variants.map((v: any) => (
                <span key={v.id} style={{ marginLeft: 8 }}>
                  {v.size}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
