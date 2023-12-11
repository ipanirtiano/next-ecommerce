"use client";
import axios from "axios";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";

const Page = () => {
  // state categories
  const [categorieName, setCategorieName] = useState<string>("");
  // init use router
  const router = useRouter();
  // mutations post a new categories
  const { mutate: addCategories, isPending: addCategoriesLoading } =
    useMutation({
      mutationFn: async (newCategories: any) => {
        return axios.post("/api/categories", newCategories);
      },
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {
        router.push("/admin/categories");
        router.refresh();
      },
    });

  // function handle submit categories
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // run mutations add categories
    const dataPost = {
      categorieName: categorieName,
    };
    addCategories(dataPost);
  };

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Add Categories</h1>

        <div className="w-[360px] mt-[20px]">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="text-sm font-semibold mb-3 text-gray-600">
                Categories Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                placeholder="Categories Name"
                value={categorieName}
                onChange={(e) => setCategorieName(e.target.value)}
              />
            </div>

            <div className="w-full flex items-center gap-2 mt-[10px]">
              <Link
                href="/admin/categories"
                type="submit"
                className="py-3 text-sm bg-gray-300 text-gray-900 text-center w-full rounded-md"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-3 text-sm bg-gray-900 text-white flex items-center justify-center w-full rounded-md"
              >
                {addCategoriesLoading ? (
                  <div className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    Saving...
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
