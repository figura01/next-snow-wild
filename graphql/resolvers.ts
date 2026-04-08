import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

export const resolvers = {
  Query: {
    products: async (
      _: unknown,
      args: { search?: string; categories?: string[]; sizes?: string[] },
    ) => {
      return prisma.product.findMany({
        where: {
          ...(args.search && {
            name: { contains: args.search, mode: "insensitive" },
          }),
          ...(args.categories?.length && {
            category: { in: args.categories as Category[] },
          }),
          ...(args.sizes?.length && {
            variants: { some: { size: { in: args.sizes } } },
          }),
        },
        include: {
          variants: {
            include: {
              stockItems: true,
            },
          },
        },
      });
    },
  },
};
