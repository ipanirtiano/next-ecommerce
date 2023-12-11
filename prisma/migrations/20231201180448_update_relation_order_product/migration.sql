-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
