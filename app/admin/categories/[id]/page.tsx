"use client";
import Link from "next/link";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";

type Props = {};

const Page = (props: Props) => {
  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">
          Update Categories
        </h1>

        <div className="w-[360px] mt-[20px]">
          <form className="space-y-2">
            <div>
              <label className="text-sm font-semibold mb-3 text-gray-600">
                Categories Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                placeholder="Categories Name"
              />
            </div>

            <div className="w-full flex items-center gap-2 mt-[10px]">
              <Link
                href="/categories"
                type="submit"
                className="py-3 text-sm bg-gray-300 text-gray-900 text-center w-full rounded-md"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-3 text-sm bg-gray-900 text-white text-center w-full rounded-md"
              >
                Update Categories
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
