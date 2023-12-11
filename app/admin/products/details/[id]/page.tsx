"use client";
import Link from "next/link";
import { BsPen } from "react-icons/bs";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LayoutsAdmin from "@/app/admin/componentsAdmin/LayoutAdmin";
import ProductDetail from "../../ProductDetail";
import DeleteProduct from "../../delete/page";

const Page = ({ params }: { params: { id: string } }) => {
  const { data: dataProducts, isLoading: dataProductsLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get(`/api/products/details/${params.id}`);
      return response.data;
    },
  });

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">
          Product Details
        </h1>

        {dataProductsLoading ? (
          <div className="w-full py-10 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <span className="loading loading-spinner loading-sm"></span>
              Loading...
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="py-2 flex items-center justify-between border-b border-gray-400">
              <h6 className="font-semibold text-gray-600 text-sm uppercase">
                Product ID# {params.id}
              </h6>
              <div className="flex items-center gap-2">
                <Link
                  href="/admin/products/1"
                  className="gap-1 flex items-center text-blue-600 hover:underline"
                >
                  <BsPen className="text-sm" />
                  Update
                </Link>
                <DeleteProduct title={"Products"} data={dataProducts} />
              </div>
            </div>

            {/* content */}
            <ProductDetail data={dataProducts} />
          </div>
        )}
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
