/*
  Warnings:

  - You are about to drop the column `solutios` on the `TFgame` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "TFgame" DROP COLUMN "solutios",
ADD COLUMN     "solutions" TEXT[];
