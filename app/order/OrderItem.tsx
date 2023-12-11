/* eslint-disable @next/next/no-img-element */
"use client";

import { FaRegCheckCircle } from "react-icons/fa";

// function format int to rupiah IDR
const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const OrderItem = ({ item }: { item: any }) => {
  return (
    <div className="grid grid-cols-12 items-start gap-3 mt-3">
      <div className="md:col-span-2 col-span-3 h-[80px] border border-gray-300 flex items-center justify-center">
        <div className="">
          <img
            className="h-[60px]"
            src={item.Products.Photo_product[0].image}
            alt=""
          />
        </div>
      </div>

      <div className="md:col-span-6 col-span-9">
        <p className="font-semibold uppercase">{item?.Products.product_name}</p>
        <div className="md:hidden">
          <p className="font-semibold">{formatRupiah(item?.Products.price)}</p>
          <p className="text-xs text-gray-600">Qty : {item?.amount} PCS</p>
        </div>
      </div>
      <div className="col-span-3 md:flex flex-col items-end hidden">
        <p className="font-semibold">{formatRupiah(item?.Products.price)}</p>
        <p className="text-xs text-gray-600">Qty :{item?.amount} PCS</p>
      </div>
    </div>
  );
};

export default OrderItem;
