import { PrismaClient } from "@prisma/client";

function initPrisma(): PrismaClient {
  let initializedPrisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    initializedPrisma = new PrismaClient();
  }

  if (!(global as any).initializedPrisma) {
    (global as any).initializedPrisma = new PrismaClient();
  }

  initializedPrisma = (global as any).prisma;

  return initializedPrisma;
}

export default initPrisma();
