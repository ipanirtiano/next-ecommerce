"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

// function format int to rupiah IDR
const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const CartItem = ({ dataCart }: { dataCart: any }) => {
  const router = useRouter();
  const [amount, setAmount] = useState(dataCart.amount);
  const [isLoading, setIsloading] = useState(false);

  // funtion decrease amount
  const decreaseAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);

    const body = {
      action: "decrease",
    };

    try {
      const response = axios.patch(`/api/client/cart/${dataCart.id}`, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // function increase amount
  const increaseAmount = () => {
    setAmount(amount + 1);

    const body = {
      action: "increase",
    };

    try {
      const response = axios.patch(`/api/client/cart/${dataCart.id}`, body);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  // function delete cart
  const deleteCart = async () => {
    setIsloading(true);
    try {
      const response = await axios.delete(`/api/client/cart/${dataCart.id}`);
      setIsloading(false);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-2 border-b border-gray-200">
      <div className="grid grid-cols-12 gap-3 relative">
        <div
          onClick={deleteCart}
          className="absolute -top-2 cursor-pointer right-3 p-2 w-3 h-3 "
        >
          {isLoading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <FaRegTrashAlt className="text-red-600" />
          )}
        </div>
        <Link
          href={`/product/${dataCart.Products.id}`}
          className="md:col-span-2 col-span-4"
        >
          <div className="flex w-full items-center gap-2">
            <div className="flex w-full items-center justify-center">
              <img
                className="h-[80px]"
                src={dataCart.Products.Photo_product[0].image}
                alt=""
              />
            </div>
          </div>
        </Link>

        <div className="md:col-span-6 col-span-7">
          <Link href={`/product/${dataCart.Products.id}`}>
            <h1 className="font-semibold text-gray-800 line-clamp-1 uppercase">
              {dataCart.Products.product_name}
            </h1>
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <p className="text-xs">
                Cat: {dataCart.Products.Categories.category_name}
              </p>
              <p className="text-xs">Color: {dataCart.Products.color}</p>
              <p className="text-xs">Size: {dataCart.Products.size}</p>
            </div>
          </Link>

          <div className="md:hidden block mt-2">
            <h6 className="text-orange-600 text-xl">
              {formatRupiah(dataCart.Products.price * amount)}
            </h6>

            <div className="text-gray-700 mt-2">
              <div className="flex h-[30px] text-sm mt-[10px]">
                <div className="flex flex-1 max-w-[120px] items-center h-full border text-primary font-medium ">
                  <button
                    onClick={decreaseAmount}
                    className="flex-1 h-full flex justify-center items-center cursor-pointer bg-gray-300/40"
                  >
                    <IoMdRemove />
                  </button>
                  <div className="flex flex-1 h-full justify-center items-center px-2">
                    {amount}
                  </div>
                  <button
                    onClick={increaseAmount}
                    className="flex-1 h-full flex justify-center items-center cursor-pointer bg-gray-600 text-white"
                  >
                    <IoMdAdd />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4 md:block hidden">
          <h6 className="text-orange-600 text-xl">
            {formatRupiah(dataCart.Products.price * amount)}
          </h6>

          <div className="text-gray-700 mt-2">
            <div className="flex h-[30px] text-sm mt-[10px]">
              <div className="flex flex-1 max-w-[120px] items-center h-full border text-primary font-medium ">
                <button
                  onClick={decreaseAmount}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer bg-gray-300/40"
                >
                  <IoMdRemove />
                </button>
                <div className="flex flex-1 h-full justify-center items-center px-2">
                  {amount}
                </div>
                <button
                  onClick={increaseAmount}
                  className="flex-1 h-full flex justify-center items-center cursor-pointer bg-gray-600 text-white"
                >
                  <IoMdAdd />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
