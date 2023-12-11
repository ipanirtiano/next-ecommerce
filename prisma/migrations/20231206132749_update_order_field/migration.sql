/*
  Warnings:

  - You are about to drop the column `amount` on the `order` table. All the data in the column will be lost.
  - You are about to drop the column `id_product` on the `order` table. All the data in the column will be lost.
  - Added the required column `total_price` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order" DROP CONSTRAINT "order_id_product_fkey";

-- AlterTable
ALTER TABLE "order" DROP COLUMN "amount",
DROP COLUMN "id_product",
ADD COLUMN     "total_price" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "item_order" (
    "id" TEXT NOT NULL,
    "id_order" TEXT NOT NULL,
    "id_product" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "item_order_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "item_order" ADD CONSTRAINT "item_order_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_order" ADD CONSTRAINT "item_order_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
