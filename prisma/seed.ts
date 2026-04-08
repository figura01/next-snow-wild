import { PrismaClient, Category, SizeType } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();

  // SKIS
  await prisma.product.create({
    data: {
      name: "Rossignol Experience 82",
      description: "Ski polyvalent piste/all-mountain",
      category: Category.SKI,
      image: "/images/ski1.jpg",
      pricePerDay: 25,
      sizeType: SizeType.CM,
      variants: {
        create: [
          {
            size: "160",
            stockItems: { create: Array.from({ length: 5 }).map(() => ({})) },
          },
          {
            size: "170",
            stockItems: { create: Array.from({ length: 4 }).map(() => ({})) },
          },
        ],
      },
    },
  });

  // SNOWBOARD
  await prisma.product.create({
    data: {
      name: "Burton Custom",
      description: "Snowboard freestyle polyvalent",
      category: Category.SNOWBOARD,
      image: "/images/snow1.jpg",
      pricePerDay: 30,
      sizeType: SizeType.CM,
      variants: {
        create: [
          {
            size: "150",
            stockItems: { create: Array.from({ length: 3 }).map(() => ({})) },
          },
          {
            size: "155",
            stockItems: { create: Array.from({ length: 2 }).map(() => ({})) },
          },
        ],
      },
    },
  });

  // CHAUSSURES
  await prisma.product.create({
    data: {
      name: "Salomon X Pro",
      description: "Chaussures de ski confort",
      category: Category.SHOES,
      image: "/images/shoes1.jpg",
      pricePerDay: 15,
      sizeType: SizeType.EU,
      variants: {
        create: [
          {
            size: "42",
            stockItems: { create: Array.from({ length: 6 }).map(() => ({})) },
          },
          {
            size: "44",
            stockItems: { create: Array.from({ length: 5 }).map(() => ({})) },
          },
        ],
      },
    },
  });

  // CASQUES
  await prisma.product.create({
    data: {
      name: "Casque Smith",
      description: "Casque léger et sécurisé",
      category: Category.HELMET,
      image: "/images/helmet1.jpg",
      pricePerDay: 10,
      sizeType: SizeType.LETTER,
      variants: {
        create: [
          {
            size: "S",
            stockItems: { create: Array.from({ length: 4 }).map(() => ({})) },
          },
          {
            size: "M",
            stockItems: { create: Array.from({ length: 6 }).map(() => ({})) },
          },
        ],
      },
    },
  });

  // BÂTONS
  await prisma.product.create({
    data: {
      name: "Bâtons Rossignol",
      description: "Bâtons légers aluminium",
      category: Category.POLES,
      image: "/images/poles1.jpg",
      pricePerDay: 8,
      sizeType: SizeType.CM,
      variants: {
        create: [
          {
            size: "110",
            stockItems: { create: Array.from({ length: 5 }).map(() => ({})) },
          },
          {
            size: "120",
            stockItems: { create: Array.from({ length: 5 }).map(() => ({})) },
          },
        ],
      },
    },
  });

  console.log("🌱 Seed terminé");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
