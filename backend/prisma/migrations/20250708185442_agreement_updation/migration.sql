-- AlterTable
ALTER TABLE "User" ADD COLUMN     "agreeToTerms" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "agreeToUpdates" BOOLEAN NOT NULL DEFAULT false;
