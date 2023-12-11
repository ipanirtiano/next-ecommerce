/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { BsCart3, BsChevronCompactUp, BsHandbag } from "react-icons/bs";
import axios from "axios";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const Navbar = () => {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  const { data: dataUser, isLoading: dataUserLoading } = useQuery({
    queryKey: ["user-client"],
    queryFn: async () => {
      const response = await axios.get("/api/client/me");
      return response.data.user;
    },
  });

  // function handle logout
  const handleLogout = async () => {
    const response = await axios.delete("/api/client/logout");
    router.push("/");
    router.refresh();
  };

  return (
    <>
      {dataUserLoading ? (
        <div className="absolute z-10 inset-0 bg-gray-50 py-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="loading loading-spinner loading-sm"></span>
            Loading...
          </div>
        </div>
      ) : (
        <div className=" fixed left-0 right-0 bg-white z-[100] border-b border-gray-300">
          <div className="flex items-center justify-between py-3 relative md:px-6 px-4 max-w-[1280px] mx-auto">
            <div className="flex items-center md:space-x-10 lg:space-x-20">
              <div className="font-semibold text-xl">
                <Link href="/" className="opacity-75">
                  La Ada
                </Link>
              </div>
            </div>
            <SearchBar />

            {dataUser ? (
              <div className="flex items-center space-x-4">
                <Link href="/cart" className="hidden md:block relative">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <BsCart3 size={20} className="opacity-75" />
                  </div>
                  {dataUser?.Cart?.length > 0 && (
                    <div className="absolute top-0 w-4 h-4 text-center -right-2 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                      {dataUser?.Cart?.length > 9
                        ? "9+"
                        : dataUser?.Cart?.length}
                    </div>
                  )}
                </Link>

                <Link href="/order" className="hidden md:block relative">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <BsHandbag size={20} className="opacity-75" />
                  </div>
                  {dataUser?.Order?.length > 0 && (
                    <div className="absolute top-0 w-4 h-4 text-center -right-2 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
                      {dataUser?.Order?.length > 9
                        ? "9+"
                        : dataUser?.Order?.length}
                    </div>
                  )}
                </Link>

                <div
                  onClick={() => setShowProfile(!showProfile)}
                  className="relative cursor-pointer gap-2"
                >
                  <img
                    src="/user.png"
                    className="w-[35px] h-[35px] rounded-full object-cover bg-gray-100 p-1"
                    alt=""
                  />
                  {showProfile && (
                    <div className="px-4 py-3 w-[150px] absolute right-2 top-[40px] border z-10 border-gray-300 rounded-md shadow-md bg-white">
                      <p className="text-xs text-gray-500 mb-3">Login as</p>
                      <ul className="text-gray-800 space-y-2">
                        <li className="flex items-center gap-2">
                          <FaRegUser /> {dataUser.name}
                        </li>
                        <li
                          onClick={handleLogout}
                          className="flex items-center gap-2"
                        >
                          <FaSignOutAlt />
                          Sign Out
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <span
                  onClick={() => setShowNav(!showNav)}
                  className="p-[9px] bg-gray-100 rounded-full md:hidden relative"
                >
                  <BsChevronCompactUp
                    className={`transition ease-in duration-150 ${
                      showNav ? "rotate-180" : "0"
                    }`}
                  />
                  {dataUser?.Cart?.length > 0 && (
                    <div className="absolute -top-[6px] -right-2 w-4 h-4 rounded-full bg-red-500"></div>
                  )}
                </span>
              </div>
            ) : (
              <Link href="/signin">
                <p className="text-gray-800 hover:underline font-semibold">
                  Sign In
                </p>
              </Link>
            )}
          </div>

          <div
            className={`md:hidden shadow-lg ${
              showNav ? "pb-2 px-4" : "h-0 invisible"
            }`}
          >
            <ul className="flex flex-col text-[15px] opacity-75">
              <li className="w-full flex items-center gap-2 border-b border-gray-300">
                <a href="/cart" className="py-3 inline-block text-xl">
                  Cart
                </a>

                {dataUser?.Cart?.length > 0 && (
                  <div className=" w-5 h-5 flex items-center justify-center text-center bg-red-600 text-white text-xs rounded-full">
                    {dataUser?.Cart?.length > 9 ? "9+" : dataUser?.Cart?.length}
                  </div>
                )}
              </li>
              <li className="w-full flex items-center gap-2 border-b border-gray-300">
                <a href="/order" className="py-3 inline-block text-xl">
                  Orders
                </a>
                {dataUser?.Order?.length > 0 && (
                  <div className=" w-5 h-5 flex items-center justify-center text-center bg-red-600 text-white text-xs rounded-full">
                    {dataUser?.Order?.length > 9
                      ? "9+"
                      : dataUser?.Order?.length}
                  </div>
                )}
              </li>
            </ul>
            <div className="flex items-center p-2 my-4 py-3 px-4 border border-gray-300/75">
              <input
                type="text"
                className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-500 text-[15px] "
                placeholder="Search"
                autoComplete="false"
              />
              <button>
                <BiSearch size={20} className="opacity-50" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
