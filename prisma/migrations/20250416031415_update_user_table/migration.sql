/*
  Warnings:

  - You are about to drop the column `names` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "names",
ADD COLUMN     "industry" TEXT,
ADD COLUMN     "name" TEXT;
