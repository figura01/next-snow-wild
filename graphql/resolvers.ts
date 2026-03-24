import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    products: async (
      _: unknown,
      args: {
        search?: string;
        categories?: string[];
        sizes?: string[];
      },
    ) => {
      return prisma.product.findMany({
        where: {
          ...(args.search && {
            name: { contains: args.search, mode: "insensitive" },
          }),
          ...(args.categories?.length && {
            category: { in: args.categories },
          }),
          ...(args.sizes?.length && {
            variants: { some: { size: { in: args.sizes } } },
          }),
        },
        include: { variants: true },
      });
    },
  },
};
