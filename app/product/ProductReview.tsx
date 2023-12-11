/* eslint-disable @next/next/no-img-element */

import ProductRating from "./ProductRating";
import ReviewList from "./ReviewList";

type Props = {};

const ProductReview = (props: Props) => {
  return (
    <>
      <div className="w-full grid lg:grid-cols-5 grid-cols-1 gap-5 mt-[30px]">
        <ProductRating />
      </div>
      <div className="w-full grid lg:grid-cols-5 grid-cols-1 gap-5 mt-[30px]">
        <div className="col-span-4">
          <h6 className="text-xl font-semibold text-gray-800 border-b border-gray-200 pb-2 mb-3">
            Review Products
          </h6>

          <div className="w-full space-y-3">
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
            <ReviewList />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;
