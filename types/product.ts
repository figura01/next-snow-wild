import { Category, SizeType } from "./enums";

export type StockItem = {
  id: string;
};

export type ProductVariant = {
  id: string;
  size: string;
  stockItems: StockItem[];
};

export type Product = {
  id: string;
  name: string;
  description: string;
  category: Category;
  image: string;
  pricePerDay: number;
  sizeType: SizeType;
  variants: ProductVariant[];
};

export type ProductVariantWithStock = ProductVariant & {
  stock: number;
};

export type GetProductsResponse = {
  products: Product[];
};
