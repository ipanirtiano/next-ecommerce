"use client";
import Link from "next/link";
import { useState } from "react";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";

type Props = {};

const Page = (props: Props) => {
  // state descriptions
  const [description, setDescriptions] = useState("");

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">
          Update Products
        </h1>

        <div className="w-full mt-[20px]">
          <form className="grid grid-cols-2 gap-10">
            <div className="space-y-2 pr-[50px]">
              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Product Name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Category
                </label>
                <div>
                  <select className="py-3 text-sm outline-gray-700 border border-gray-400 rounded-md w-full px-4 placeholder:text-sm">
                    <option value="">Select Categories</option>
                    <option value="">Iphone</option>
                    <option value="">Laptop</option>
                    <option value="">Air Pods</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Size
                </label>
                <input
                  type="text"
                  className="w-full uppercase px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Size"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Colors
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Colors"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Price
                </label>
                <input
                  type="number"
                  className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Price"
                />
              </div>
            </div>

            <div className="pr-[20px] space-y-2">
              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Photo Products
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-1 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm file:bg-violet-50 file:text-violet-700 file:px-2 file:font-semibold file:border-none file:rounded-md file:py-2 file:text-sm"
                  placeholder="Price"
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Descriptions Products
                </label>

                <textarea
                  className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md"
                  cols={30}
                  rows={10}
                ></textarea>
              </div>

              <div className="w-full flex items-center gap-2 mt-[10px]">
                <Link
                  href="/products/details/1"
                  type="submit"
                  className="py-3 text-sm bg-gray-300 text-gray-900 text-center w-full rounded-md"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="py-3 text-sm bg-gray-900 text-white text-center w-full rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
