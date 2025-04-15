import { NODE_ENV } from "@/constants";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const db = globalForPrisma.prisma || new PrismaClient();

if (NODE_ENV !== "production") {
  globalForPrisma.prisma = db;
}

export default db;
