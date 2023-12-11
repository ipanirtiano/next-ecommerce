/* eslint-disable @next/next/no-img-element */
"use client";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import OrderItem from "./OrderItem";
import CancelOrder from "./delete/page.";

// function format int to rupiah IDR
const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const DetailOrder = ({ data }: { data: any }) => {
  return (
    <div className="mt-[10px] px-4 pt-2 border border-gray-400 pb-4 rounded-md">
      <div className="text-sm text-gray-800 border-b border-gray-400 pb-1">
        <p className="uppercase">Order ID# {data?.id}</p>
      </div>

      {data?.item_order.map((item: any, i: any) => {
        return <OrderItem key={i} item={item} />;
      })}

      <div className="border-t border-gray-400 mt-3 pt-3">
        <div className="flex flex-col items-end space-y-2">
          {data?.item_order.map((item: any, i: any) => {
            return (
              <div key={i} className="flex items-center justify-between gap-3">
                <p className="text-gray-600 text-xs uppercase">
                  {item.Products.product_name + " " + item.amount + "X"}
                </p>
                <p className="text-gray-600 text-xs uppercase">
                  {formatRupiah(item?.Products.price)}
                </p>
              </div>
            );
          })}
          <p className="text-gray-800 font-semibold border-t border-gray-700 py-2">
            Total Order : {formatRupiah(data?.total_price)}
          </p>
          <div className="flex items-center gap-2 font-semibold">
            <p className="text-gray-800 text-sm uppercase">
              Payment : {data?.payment}
            </p>
            {data?.payment === "settlement" && (
              <FaRegCheckCircle className="text-green-500" />
            )}
            {data?.payment === "pending" && (
              <FaRegClock className="text-yellow-500" />
            )}
          </div>
          {data?.payment != "settlement" && (
            <div>
              <CancelOrder title={"Order"} data={data}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailOrder;
