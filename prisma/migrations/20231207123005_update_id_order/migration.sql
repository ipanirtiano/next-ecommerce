/*
  Warnings:

  - Added the required column `id_order` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "order" ADD COLUMN     "id_order" TEXT NOT NULL;
