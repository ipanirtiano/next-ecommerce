"use client";
import { useState } from "react";

const DescriptionsProduct = ({ product }: { product: any }) => {
  // state show more descriptions
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <div className="w-full grid lg:grid-cols-5 grid-cols-1 gap-5 mt-[30px] ">
      <div className="col-span-4 border">
        <div
          className={`text-gray-800 border-gray-200 py-6 px-4 ${
            showMore ? "" : "overflow-hidden"
          } `}
        >
          <h1 className="text-xl font-semibold mb-3 uppercase">
            {product.product_name}
          </h1>
          <p className="py-3">{product.descriptions}</p>
        </div>
        <div className="w-full py-2 flex items-center justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="py-2 px-4 text-sm hover:bg-orange-500 hover:text-white text-gray-800 border border-orange-500"
          >
            {showMore ? "Minimize" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DescriptionsProduct;
