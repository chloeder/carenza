/*
  Warnings:

  - The `experience` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `education` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "experience",
ADD COLUMN     "experience" JSONB[],
DROP COLUMN "education",
ADD COLUMN     "education" JSONB[];
