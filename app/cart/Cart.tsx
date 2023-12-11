"use client";
/* eslint-disable @next/next/no-img-element */
import CartItem from "./CartItem";
import { BsCart3 } from "react-icons/bs";
import { useGlobalContext } from "../contex/CartContext";
import DetailCart from "./DetailCart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Cart = () => {
  // get user data
  const { cart, totalPrice }: any = useGlobalContext();
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, [router]);

  return (
    <>
      {cart?.length != 0 ? (
        <div className="w-full grid grid-cols-12 gap-8 mt-[20px]">
          <div className="lg:col-span-8 col-span-12">
            {/* cart item */}
            <div className="w-full space-y-4">
              {cart?.map((data: any, i: number) => {
                return <CartItem key={i} dataCart={data} />;
              })}
            </div>
          </div>

          <DetailCart cart={cart} totalPrice={totalPrice} />
        </div>
      ) : (
        <div
          className="w-full flex items-center
       justify-center gap-3 mt-[60px]"
        >
          <BsCart3 size={20} className="opacity-75" />
          <p className="text-gray-600 font-semibold">Empty Cart</p>
        </div>
      )}
    </>
  );
};

export default Cart;
