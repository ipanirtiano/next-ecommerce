"use client";
// function format int to rupiah IDR
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const DetailCart = ({ cart, totalPrice }: { cart: any; totalPrice: any }) => {
  // state snapToken
  const [snapToken, setSnapToken] = useState("");

  // load adding script element to body
  useEffect(() => {
    // src script midtrans
    const midtransUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    // create element script
    let scriptTag = document.createElement("script");
    scriptTag.src = midtransUrl;
    // client key
    const midtransClientKey = "SB-Mid-client-EPDigmFsX3iaV-k7";
    // set attribute script tag
    scriptTag.setAttribute("data-client-key", midtransClientKey);
    // appent child
    document.body.appendChild(scriptTag);
    // remove child after page loaded
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  // mutation process payment
  const { mutate: processPayment, isPending: processPaymentLoading } =
    useMutation({
      mutationFn: async (order: any) => {
        const response = await axios.post("/api/midtrans/token", order);
        window.snap.pay(response.data.data.token);
      },
    });

  // function handle submit order
  const handleSubmitOrder = async () => {
    let id_product = [];
    let product_name = [];

    for (let i = 0; i < cart.length; i++) {
      id_product.push(cart[i].id);
      product_name.push(cart[i].amount + " X " + cart[i].Products.product_name);
    }

    const dataOrder = {
      cart: cart,
    };

    // run mutations
    processPayment(dataOrder);
  };

  const formatRupiah = (money: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <div className="lg:col-span-4 col-span-12">
      <div className="w-full text-gray-800 mt-[10px] border border-gray-200 rounded-lg px-4 py-4">
        <h6 className="font-semibold mb-2">Details Orders</h6>
        <div className="space-y-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Total Orders ({cart?.length})
            </p>
            <h6 className="text-sm">{formatRupiah(totalPrice)}</h6>
          </div>
        </div>

        <div className="w-full flex items-center justify-between mt-[18px]">
          <p className=" text-gray-800 font-semibold">Grand Total</p>
          <h6 className="text-orange-600 text-base font-semibold">
            {formatRupiah(totalPrice)}
          </h6>
        </div>

        <div className="w-full mt-[10px]">
          <button
            onClick={handleSubmitOrder}
            className="w-full flex items-center justify-center text-sm py-2 text-center bg-orange-600 text-white"
          >
            {processPaymentLoading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Loading...
              </div>
            ) : (
              "Process Payment"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCart;
