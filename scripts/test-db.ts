import { prisma } from "@/lib/prisma";

async function test() {
  const products = await prisma.product.findMany();

  console.log(products);
}

test();
