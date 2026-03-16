import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    products: async () => {
      return prisma.product.findMany({
        include: {
          variants: true,
        },
      });
    },
  },
};
