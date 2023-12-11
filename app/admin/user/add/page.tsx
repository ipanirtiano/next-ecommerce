"use client";
import Link from "next/link";
import { useState, SyntheticEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";

const Page = () => {
  // init use router
  const router = useRouter();
  // state input request
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  // set mutations
  const { mutate: postUser, isPending: PostUserLoading } = useMutation({
    mutationFn: async (newPost: any) => {
      return axios.post("/api/user/add", newPost);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      // redirect to user page
      router.push("/admin/user");
      router.refresh();
    },
  });

  // function handle submit
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // validate form
    if (name === "" || email === "null" || phone === "") return;

    // set data post
    const dataPost = {
      name,
      email,
      phone,
    };

    // run mutation post
    postUser(dataPost);
  };

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Create User</h1>

        <div className="w-[360px] mt-[20px]">
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="text-sm font-semibold mb-3 text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-3 text-gray-600">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-semibold mb-3 text-gray-600">
                Phone
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="w-full flex items-center gap-2 mt-[10px]">
              <Link
                href="/admin/user"
                type="submit"
                className="py-3 text-sm bg-gray-300 text-gray-900 text-center w-full rounded-md"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="py-3 text-sm bg-gray-900 text-white flex items-center justify-center w-full rounded-md"
              >
                {PostUserLoading ? (
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
