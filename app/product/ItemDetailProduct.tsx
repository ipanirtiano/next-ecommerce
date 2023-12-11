"use client";
import Link from "next/link";
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { BiStoreAlt } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FiPackage } from "react-icons/fi";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

// function format int to rupiah IDR
const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const ItemDetailProduct = ({ product }: { product: any }) => {
  // set use router
  const router = useRouter();
  // state amount
  const [amount, setAmount] = useState(1);

  // decrease amount
  const decreaseAmount = () => {
    if (amount === 1) return;
    setAmount(amount - 1);
  };

  // mutation post a product into cart
  const { mutate: addCart, isPending: addCartLoading } = useMutation({
    mutationFn: async (product: any) => {
      const response = await axios.post("/api/client/cart", product);
      return response.data;
    },
    onError: (error) => {
      router.push("/signin");
    },
    onSuccess: () => {
      router.push("/cart");
    },
  });

  // function handle submit cart
  const handleSubmitCart = () => {
    const data = {
      id_product: product.id,
      amount: amount,
    };
    // run mutations
    addCart(data);
  };

  return (
    <div className="w-full col-span-2">
      <h1 className="text-2xl uppercase font-semibold text-gray-800">
        {product.product_name}
      </h1>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-sm text-yellow-400 flex items-center">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </p>
        <p className="text-xs text-gray-400">(8.9)</p>
      </div>

      <div className="text-gray-700 mt-2 flex items-center gap-2 ">
        <p className="text-sm font-semibold">Colors</p>
        <p className="uppercase text gray-600">{product.color}</p>
      </div>

      <div className="text-gray-700 mt-2 flex items-center gap-2">
        <p className="text-sm font-semibold">Size</p>
        <div className="flex items-center gap-2">
          <div className="py-1 px-2 border flex items-center justify-center border-gray-300">
            <p className="text-sm text-gray-700">{product.size}</p>
          </div>
        </div>
      </div>

      <div className="mt-[20px]">
        <h6 className="text-orange-600 text-2xl">
          {formatRupiah(product.price * amount)}
        </h6>
      </div>

      <div className="text-gray-700 mt-2">
        <div className="flex h-[34px] text-sm mt-[10px]">
          <div className="flex flex-1 max-w-[160px] items-centerh-full border text-primary font-medium ">
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
              onClick={() => setAmount(amount + 1)}
              className="flex-1 h-full flex justify-center items-center cursor-pointer text-white bg-gray-700/40"
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full mt-[20px] grid grid-cols-2 gap-2">
        <Link
          href={"/order"}
          className="py-2 text-sm text-center fonts bg-yellow-400 text-white"
        >
          Order Now
        </Link>
        <div
          onClick={handleSubmitCart}
          className="py-2 cursor-pointer text-sm text-center bg-orange-600 text-white"
        >
          {addCartLoading ? (
            <div className="flex items-center justify-center gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              Loading...
            </div>
          ) : (
            "Add To Cart"
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailProduct;
