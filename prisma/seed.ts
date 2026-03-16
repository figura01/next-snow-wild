import { PrismaClient, Category, SizeType } from "@prisma/client";
const prisma = new PrismaClient();
async function createVariants(
  productId: string,
  sizes: string[],
  stockPerSize = 3,
) {
  for (const size of sizes) {
    const variant = await prisma.productVariant.create({
      data: { productId, size },
    });
    for (let i = 0; i < stockPerSize; i++) {
      await prisma.stockItem.create({ data: { variantId: variant.id } });
    }
  }
}

async function main() {
  console.log("🌱 Seeding database...");
  await prisma.reservationItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.stockItem.deleteMany();
  await prisma.productVariant.deleteMany();
  await prisma.product.deleteMany();

  /* SKIS */
  const ski = await prisma.product.create({
    data: {
      name: "Rossignol Hero",
      description: "Ski de piste performant",
      category: Category.SKI,
      image: "/products/rossignol-hero.jpg",
      pricePerDay: 20,
      sizeType: SizeType.CM,
    },
  });
  await createVariants(ski.id, ["160", "170", "180"], 4);

  /* SNOWBOARD */
  const snowboard = await prisma.product.create({
    data: {
      name: "Burton Custom",
      description: "Snowboard polyvalent",
      category: Category.SNOWBOARD,
      image: "/products/burton-custom.jpg",
      pricePerDay: 22,
      sizeType: SizeType.CM,
    },
  });
  await createVariants(snowboard.id, ["150", "155", "160"], 3);

  /* CHAUSSURES */
  const boots = await prisma.product.create({
    data: {
      name: "Salomon S-Pro",
      description: "Chaussures de ski confortables",
      category: Category.SHOES,
      image: "/products/salomon-boots.jpg",
      pricePerDay: 12,
      sizeType: SizeType.EU,
    },
  });
  await createVariants(boots.id, ["40", "41", "42", "43", "44"], 2);

  /* BATONS */
  const poles = await prisma.product.create({
    data: {
      name: "Black Diamond Trail",
      description: "Bâtons solides",
      category: Category.POLES,
      image: "/products/poles.jpg",
      pricePerDay: 5,
      sizeType: SizeType.CM,
    },
  });
  await createVariants(poles.id, ["110", "120", "130"], 3);

  /* CASQUES */
  const helmet = await prisma.product.create({
    data: {
      name: "Salomon Pioneer",
      description: "Casque léger et sécurisé",
      category: Category.HELMET,
      image: "/products/helmet.jpg",
      pricePerDay: 8,
      sizeType: SizeType.LETTER,
    },
  });
  await createVariants(helmet.id, ["S", "M", "L"], 3);
  console.log("✅ Seed completed");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
