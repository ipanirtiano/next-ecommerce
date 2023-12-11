"use client";
import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { categories } from "@prisma/client";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";

const Page = () => {
  // init use router
  const router = useRouter();
  // state form
  const [productName, setProductName] = useState<string>("");
  const [categori, setCategori] = useState<string>("");
  const [size, setSize] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [price, setPrice] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [file, setFile] = useState<string[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // state useform
  const { handleSubmit } = useForm();
  // get auth me
  const { data: authMe }: any = useQuery({ queryKey: ["username"] });

  // query get all categories
  const { data: categories, isLoading: categoriesLoading } = useQuery<
    categories[]
  >({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get("/api/categories");
      return response.data;
    },
  });

  // set mutation post a new products
  const { mutate: postProduct } = useMutation({
    mutationFn: async (newPost: any) => {
      const response = await axios.post("/api/products", newPost);
      return response.data;
    },
    onSuccess: () => {
      router.push("/admin/products");
      router.refresh();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // handle submit
  const onSubmit = async (data: any) => {
    // set isloading true
    setIsLoading(true);
    // validate user
    if (authMe.id) {
      // set user ID
      const userId = authMe?.id;
      const imageUrl = [];

      if (file) {
        for (let i = 0; i < file?.length; i++) {
          const formData = new FormData();
          formData.append("file", file[i]);
          formData.append("upload_preset", "products_photos");
          const uploadResponse = await fetch(
            "https://api.cloudinary.com/v1_1/dqxwj5jsh/image/upload",
            {
              method: "POST",
              body: formData,
            }
          );
          const uploadedImageData = await uploadResponse.json();
          imageUrl.push(uploadedImageData.secure_url);
        }
      }

      // set data mutations
      const newPost = {
        user_id: userId,
        product_name: productName,
        categori: categori,
        size: size,
        color: color,
        price: price,
        descriptions: descriptions,
        imageUrl: imageUrl,
      };

      // run mutation
      postProduct(newPost);

      // set is Loading false
      setIsLoading(false);
    }
  };

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Add Products</h1>

        <div className="w-full mt-[20px]">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-10"
            encType="multipart/form-data"
          >
            <div className="space-y-2 pr-[50px]">
              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full uppercase px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Product Name"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Category
                </label>
                <div>
                  <select
                    value={categori}
                    onChange={(e) => setCategori(e.target.value)}
                    required
                    className="py-3 text-sm outline-gray-700 border border-gray-400 rounded-md w-full px-4 placeholder:text-sm"
                  >
                    <option value="">Select Categories</option>

                    {categories?.map((categorie) => {
                      return (
                        <option key={categorie.id} value={categorie.id}>
                          {categorie.category_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Size
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  required
                  placeholder="Size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-semibold mb-3 text-gray-600">
                  Colors
                </label>
                <input
                  type="text"
                  className="w-full uppercase px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                  placeholder="Colors"
                  required
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
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
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                  name="file"
                  required
                  multiple
                  className="w-full px-4 py-1 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm file:bg-violet-50 file:text-violet-700 file:px-2 file:font-semibold file:border-none file:rounded-md file:py-2 file:text-sm"
                  onChange={(e) => setFile(e.target.files)}
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
                  value={descriptions}
                  required
                  onChange={(e) => setDescriptions(e.target.value)}
                ></textarea>
              </div>

              <div className="w-full flex items-center gap-2 mt-[10px]">
                <Link
                  href="/admin/products"
                  type="submit"
                  className="py-3 text-sm bg-gray-300 text-gray-900 text-center w-full rounded-md"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="py-3 text-sm flex items-center justify-center bg-gray-900 text-white text-center w-full rounded-md"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <span className="loading loading-spinner loading-sm"></span>
                      Loading...
                    </div>
                  ) : (
                    "Submit"
                  )}
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
