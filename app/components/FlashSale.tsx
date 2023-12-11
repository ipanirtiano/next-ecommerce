import Link from "next/link";
import FlashSaleList from "./FlashSaleList";

/* eslint-disable @next/next/no-img-element */
type Props = {};

const FlashSale = (props: Props) => {
  // image product array
  const imgProducts = [
    {
      src: "/products/iphone.png",
    },
    {
      src: "/products/laptop.png",
    },
    {
      src: "/products/sepatu2.png",
    },
    {
      src: "/products/tas1.png",
    },
    {
      src: "/products/jam1.png",
    },
    {
      src: "/products/sendal.png",
    },
    {
      src: "/products/hoodi.png",
    },
    {
      src: "/products/topi.png",
    },
    {
      src: "/products/sepatu1.png",
    },
  ];

  return (
    <div className="w-full mt-4">
      <p className="opacity-75 font-semibold mb-1 text-xl">Flash Sale</p>
      <div className="scrollbar-hide w-full overflow-x-scroll whitespace-nowrap space-x-2">
        {/* Flash Sale list */}
        {imgProducts.map((imgProducts, i: number) => {
          return <FlashSaleList key={i} src={imgProducts.src} />;
        })}
        {/* end Flash Sale list */}
      </div>
    </div>
  );
};

export default FlashSale;
