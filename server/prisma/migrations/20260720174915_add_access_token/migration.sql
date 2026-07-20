/*
  Warnings:

  - Made the column `githubId` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accessToken" TEXT,
ALTER COLUMN "githubId" SET NOT NULL;
