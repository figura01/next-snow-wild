import { Product } from "@/types/product";

export const productResolver = {
  Mutation: {
    createProduct: async (
      _: unknown,
      args: Record<string, unknown>,
      ctx: { services: { product: { createProduct: (data: unknown) => Promise<Product> } } },
    ) => {
      return ctx.services.product.createProduct(args.data);
    },
  },
};
