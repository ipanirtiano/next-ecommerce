import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import prisma from "@/prisma/prisma_db";
import LayoutsAdmin from "../componentsAdmin/LayoutAdmin";

const getAllDataProduct = async () => {
  try {
    const products = await prisma.products.findMany({
      include: {
        Photo_product: { select: { image: true } },
        Categories: { select: { category_name: true } },
        Admin: { select: { name: true } },
      },
    });
    return products;
  } catch (error) {
    console.log(error);
  }
};

const formatRupiah = (money: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

const Page = async () => {
  // get data product
  const data = await getAllDataProduct();

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Products</h1>

        <Link
          href="/admin/products/add"
          className="mt-[20px] gap-2 flex items-center text-blue-600 hover:underline"
        >
          <AiOutlineUnorderedList />
          Add new products
        </Link>

        <div className="overflow-x-auto mt-[10px]">
          <table className="table">
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Size</th>
                <th>Colors</th>
                <th>Price</th>
                <th>Submit by</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item: any, i = 0) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td className="uppercase">
                      <Link
                        href={`/admin/products/details/${item.id}`}
                        className="text-blue-600 hover:underline"
                      >
                        {item.product_name}
                      </Link>
                    </td>
                    <td>{item.Categories.category_name}</td>
                    <td>{item.size}</td>
                    <td className="uppercase">{item.color}</td>
                    <td className="font-semibold">
                      {formatRupiah(item.price)}
                    </td>
                    <td>{item.Admin.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
