"use client";

import Footer from "@/components/client/Footer";
import Header from "@/components/client/header/Header";
import { useProducts } from "@/hooks/useProducts";

export default function Home() {
  const { data, isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <div className="container py-8">
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
      <Footer />
    </>
  );
}
