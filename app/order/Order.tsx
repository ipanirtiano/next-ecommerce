/* eslint-disable @next/next/no-img-element */
"use client";
import DetailOrder from "./DetailOrder";
import { useGlobalContext } from "../contex/CartContext";

// function format int to rupiah IDR
const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const Order = () => {
  const { order }: any = useGlobalContext();

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="md:col-span-8 py-4 col-span-12">
          <div className="text-xl text-gray-800 font-semibold">Your Order</div>

          {order?.map((data: any, i: any) => {
            return <DetailOrder key={i} data={data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Order;
