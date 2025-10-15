/*
  Warnings:

  - Made the column `profileURL` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "profileURL" SET NOT NULL,
ALTER COLUMN "profileURL" SET DEFAULT 'DefualtNoImageProfile.png';
