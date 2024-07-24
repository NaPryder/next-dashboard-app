import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const company = await prisma.company.upsert({
  //   where: { name: "N Infinite Co., Ltd." },
  //   update: {},
  //   create: {
  //     name: "N Infinite Co., Ltd.",
  //     tax_id: "1234",
  //     branches: {
  //       create: [{}],
  //     },
  //   },
  // });

  const company = {
    create: {
      name: "N Infinite Co., Ltd.",
      taxId: "1234",
      branches: {
        create: [{}],
      },
    },
  };

  const user = await prisma.user.upsert({
    where: { email: "test1@test.com" },
    update: {},
    create: {
      email: "test1@test.com",
      password: "1234",
      company,
    },
  });

  console.log("user :>> ", user);
}
console.log("---Migrate");

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
