"use client";
import axios from "axios";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

const NavbarAdmin = () => {
  const router = useRouter();
  // state username
  const [userName, setUserName] = useState();

  const { data: authMe } = useQuery({
    queryKey: ["username"],
    queryFn: async () => {
      const response = await axios.get("/api/auth/me");
      return response.data.user;
    },
  });

  return (
    <>
      <nav className="w-full fixed px-4 bg-gray-100 text-gray-800 shadow-md h-[55px]">
        <div className="w-full flex items-center justify-between py-3">
          <h1 className="text-xl font-semibold">
            E-Commerce <span className="font-light">Admin</span>
          </h1>

          <Link href="/">
            <div className="flex items-center gap-2">
              <AiOutlineUser />
              {authMe?.name}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavbarAdmin;
