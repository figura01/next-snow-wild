"use client";

import { useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import { ProductVariant } from "@/types/product";
import { Badge } from "@/components/ui/badge";

import { CategoryFilter } from "@/components/catalogue/CategoryFilter";

const CataloguePage = () => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const { data, isLoading, error } = useProducts(category);
  console.log("data", data);
  if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error loading products</p>;
  console.log(error);

  return (
    <>
      <div className="flex flex-col p-8">
        <h1 className="text-2xl font-bold mb-6">Catalogue</h1>
        <div className="flex flex-col">
          <div className="flex w-full items-start gap-1 mb-6">
            <CategoryFilter
              onChange={setCategory}
              selectedCategory={category}
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            {data?.map((product: Product) => (
              <div key={product.id} className="border rounded-xl p-4 shadow-sm">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">{product.category}</p>

                <div className="mt-2 flex gap-2 flex-wrap">
                  {product.variants.map((variant: ProductVariant) => {
                    const stock = variant?.stockItems.length;
                    return (
                      <span key={variant.id} className="flex flex-col ">
                        <Badge
                          variant="outline"
                          className="flex justify-center items-center border-gray-300"
                        >
                          {variant.size}
                        </Badge>
                        <span className="text-xs text-center text-gray-500">
                          ({stock} dispo)
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CataloguePage;
