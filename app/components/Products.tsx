/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import ProductList from "./ProductList";
import prisma from "@/prisma/prisma_db";

const getAllDataProduct = async () => {
  try {
    const products = await prisma.products.findMany({
      include: {
        Photo_product: { select: { image: true } },
        Categories: { select: { category_name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

const Products = async () => {
  // get data product
  const dataProducts = await getAllDataProduct();

  return (
    <div className="w-full mt-[20px]">
      <div className="w-full flex items-center justify-between">
        <p className="opacity-75 font-semibold mb-1 text-xl">Special For You</p>
        <Link href="/" className="opacity-75 font-semibold mb-1 cursor-pointer">
          Show All
        </Link>
      </div>
      <div className="w-full grid lg:grid-cols-5 grid-cols-2 sm:grid-cols-3 gap-2">
        {/* product list */}
        {dataProducts?.map((item, i: number) => {
          return <ProductList key={i} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
