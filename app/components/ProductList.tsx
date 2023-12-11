import Link from "next/link";
import { AiTwotoneStar } from "react-icons/ai";

/* eslint-disable @next/next/no-img-element */

const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const ProductList = ({ product }: { product: any }) => {
  return (
    <Link href={`/product/${product.id}`} className="w-full">
      <div className="flex w-full md:h-[200px] h-[150px] items-center justify-center border border-gray-200 p-2">
        <img
          className="md:h-[130px] h-[100px]"
          src={product.Photo_product[0].image}
          alt=""
        />
      </div>
      <div className="w-full px-1 mb-2">
        <h6 className="text-gray-800 mt-1 line-clamp-1 uppercase">
          {product.product_name}
        </h6>
        <h6 className="text-orange-600 text-sm">
          {formatRupiah(product.price)}
        </h6>

        <div className="flex items-center gap-2">
          <p className="text-xs text-yellow-400 flex items-center">
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
            <AiTwotoneStar />
          </p>
          <p className="text-xs text-gray-400">(8.9)</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductList;
