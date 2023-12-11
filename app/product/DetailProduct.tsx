"use client";
import ImageProductDetail from "./ImageProductDetail";
import ItemDetailProduct from "./ItemDetailProduct";
import DescriptionsProduct from "./DescriptionsProduct";
import ProductReview from "./ProductReview";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

/* eslint-disable @next/next/no-img-element */

const DetailProduct = ({ product_id }: { product_id: string }) => {
  const { data: detailproduct, isLoading: detailproductLoading } = useQuery({
    queryKey: ["product_detail"],
    queryFn: async () => {
      const response = await axios.get(`/api/products/details/${product_id}`);
      return response.data;
    },
  });

  return (
    <div className="w-full mt-[10px]">
      {detailproductLoading ? (
        <div className="w-full py-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner loading-sm"></span>
            Loading...
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full grid lg:grid-cols-5 grid-cols-1 gap-5">
            {/* image product */}
            <ImageProductDetail product={detailproduct} />
            {/* end image product */}

            {/* Drtail Product */}
            <ItemDetailProduct product={detailproduct} />
            {/*  end Details Produ t */}
          </div>

          <DescriptionsProduct product={detailproduct} />
          <ProductReview />
        </div>
      )}
    </div>
  );
};

export default DetailProduct;
