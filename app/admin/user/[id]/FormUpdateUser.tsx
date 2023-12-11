"use client";
import { admin } from "@prisma/client";
import Link from "next/link";
import React, { SyntheticEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const FromUpdataUser = ({ user }: { user: admin }) => {
  // init use router
  const router = useRouter();
  // state form update
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  // set mutations update user
  const { mutate: updateUser, isPending: updateUserLoading } = useMutation({
    mutationFn: async (newUser) => {
      return axios.patch(`/api/user/${user.id}`, newUser);
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

  // function handle update
  const handleUpdate = (e: SyntheticEvent) => {
    e.preventDefault();
    // validate form
    if (name === "" || email === "null" || phone === "") return;

    // set data new user
    const dataUser: any = {
      name,
      email,
      phone,
    };
    // run mutations update user
    updateUser(dataUser);
  };

  return (
    <>
      <form onSubmit={handleUpdate} className="space-y-2">
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
            {updateUserLoading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Update...
              </div>
            ) : (
              "Save"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default FromUpdataUser;
