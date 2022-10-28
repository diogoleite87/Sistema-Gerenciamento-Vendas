/*
  Warnings:

  - Added the required column `valueSold` to the `sold` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sold" ADD COLUMN     "valueSold" DOUBLE PRECISION NOT NULL;
