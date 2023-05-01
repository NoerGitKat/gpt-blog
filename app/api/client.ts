import { PrismaClient } from "@prisma/client";

function initPrisma(): PrismaClient {
  let initializedPrisma: PrismaClient;

  if (process.env.NODE_ENV === "production") {
    initializedPrisma = new PrismaClient();
  }

  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }

  initializedPrisma = (global as any).prisma;

  return initializedPrisma;
}

export const prisma = initPrisma();
