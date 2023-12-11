"use client";
import axios from "axios";
import Link from "next/link";
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { BiCategory, BiLockOpenAlt } from "react-icons/bi";
import { LuPencilLine } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LogoutModal from "./LogoutModal";

const Sidebar = () => {
  return (
    <div className="w-full h-full min-h-screen bg-gray-800 text-gray-100 pt-[75px]">
      <h6 className="text-xs px-4">Menu</h6>
      <div className="mt-2">
        <ul className="space-y-2">
          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 flex items-center gap-2"
            >
              <AiOutlineDashboard />
              Dashboard
            </Link>
          </li>

          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href="/admin/user"
              className="px-4 py-2 flex items-center gap-2"
            >
              <AiOutlineUser />
              User
            </Link>
          </li>

          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href={"/admin/categories"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <BiCategory />
              Category
            </Link>
          </li>

          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href={"/admin/products"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <AiOutlineUnorderedList />
              Product
            </Link>
          </li>
        </ul>
      </div>

      <h6 className="text-xs px-4 mt-[20px]">Income</h6>
      <div className="mt-2">
        <ul className="space-y-2">
          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href={"/admin/order"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <LuPencilLine />
              Orders
            </Link>
          </li>
        </ul>
      </div>

      <h6 className="text-xs px-4 mt-[20px]">Setings</h6>
      <div className="mt-2">
        <ul className="space-y-2">
          <li className=" hover:bg-gray-100 hover:text-gray-800">
            <Link
              href={"/admin/dashboard"}
              className="px-4 py-2 flex items-center gap-2"
            >
              <BiLockOpenAlt />
              Password
            </Link>
          </li>
        </ul>
      </div>

      <h6 className="text-xs px-4 mt-[20px]">Logout</h6>
      <div className="mt-2">
        <ul className="space-y-2">
          <LogoutModal />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
