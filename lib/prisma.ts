import { NODE_ENV } from "@/constants";
import { PrismaClient } from "./generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient();

if (NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
