/*
  Warnings:

  - You are about to drop the column `industry` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `skills` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `carrer_insights` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "carrer_insights" DROP CONSTRAINT "carrer_insights_userId_fkey";

-- AlterTable
ALTER TABLE "resumes" ADD COLUMN     "summary" TEXT;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "industry",
DROP COLUMN "skills",
ADD COLUMN     "achievements" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "certifications" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "hardSkills" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "projects" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "relevantSkills" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "role" TEXT,
ADD COLUMN     "skillsToImprove" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "softSkills" TEXT[] DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "experience" SET DEFAULT ARRAY[]::JSONB[],
ALTER COLUMN "education" SET DEFAULT ARRAY[]::JSONB[];

-- DropTable
DROP TABLE "carrer_insights";

-- DropEnum
DROP TYPE "JobDemand";

-- DropEnum
DROP TYPE "MarketOutlook";
