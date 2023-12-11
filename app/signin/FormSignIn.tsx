"use client";
/* eslint-disable @next/next/no-img-element */
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

type Props = {};

const FormSignIn = (props: Props) => {
  // init use router
  const router = useRouter();
  // state form login
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // set mutations login
  const { mutate: login, isPending: loginLoading } = useMutation({
    mutationFn: async (user: any) => {
      const response = await axios.post("/api/client/signin", user);
      return response.data;
    },
    onError: (error) => {
      const e = error as AxiosError;
      alert(e.message);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  // function handle login
  const handleLogin = (e: SyntheticEvent) => {
    e.preventDefault();

    // set user login
    const userLogin = {
      email: user.email,
      password: user.password,
    };

    // run mutations logn
    login(userLogin);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center py-2">
      <div className="pt-10 px-9 pb-4 rounded-lg md:border md:border-gray-200 flex flex-col w-full sm:w-[400px]">
        <h1 className="text-xl font-medium mb-4 opacity-75">Sign In</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Email
          </label>
          <input
            type="text"
            className="p-2 border-gray-500 border-[1px] caret-blue-500 rounded-md w-full mb-4 focus:outline-none placeholder:text-sm text-black"
            id="Email"
            placeholder="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Password
          </label>
          <input
            type="password"
            className="p-2 border-gray-500 border-[1px] rounded-md w-full mb-4 focus:outline-none caret-blue-500 text-black placeholder:text-sm"
            id="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            type="submit"
            className="p-2 w-full border bg-gray-900 text-white border-gray-300 mt-2 focus:outline-none focus:border-gray-600 flex items-center justify-center"
          >
            {loginLoading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Loading...
              </div>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* <button className="flex items-center justify-center gap-3 p-2 border text-white border-gray-500 mt-2 focus:outline-none focus:border-gray-600">
          <img src="google.png" alt="" className="w-[20px] h-[20px]" />
          <p className="text-gray-600">Login with google</p>
        </button> */}
        <div className="flex items-center justify-between mt-3 mb-4">
          <Link href="/signup" className="text-sm text-blue-800/75 underline">
            Register ?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormSignIn;
