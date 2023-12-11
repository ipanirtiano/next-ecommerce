-- DropForeignKey
ALTER TABLE "item_order" DROP CONSTRAINT "item_order_id_order_fkey";

-- AddForeignKey
ALTER TABLE "item_order" ADD CONSTRAINT "item_order_id_order_fkey" FOREIGN KEY ("id_order") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
