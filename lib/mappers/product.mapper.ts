import { Product, ProductVariant } from "@/types/product";

export function mapProduct(product: Product) {
  return {
    ...product,
    variants: product.variants.map((variant: ProductVariant) => ({
      ...variant,
      stock: variant.stockItems.length,
    })),
  };
}
