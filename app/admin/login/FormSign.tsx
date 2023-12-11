"use client";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

const FormSignIn = () => {
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
      const response = await axios.post("/api/auth/login", user);
      return response.data;
    },
    onError: (error) => {
      const e = error as AxiosError;
      alert(e.message);
    },
    onSuccess: () => {
      router.push("/admin/dashboard");
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
    <div className="w-[460px] bg-white py-7 px-8 text-gray-800 rounded-lg">
      <h1 className="text-xl font-semibold mb-5">Sign In</h1>
      <form onSubmit={handleLogin} className="space-y-3">
        <div>
          <label className="text-sm font-semibold mb-3 text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="text"
            className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </div>
        <div>
          <label className="text-sm font-semibold mb-3 text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-3 text-sm outline-gray-700 border border-gray-400 rounded-md placeholder:text-sm"
            placeholder="********"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>

        <div>
          <button
            type="submit"
            className="py-3 text-sm bg-gray-900 text-white flex justify-center w-full rounded-md"
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
        </div>
        <Link
          href={"/signup"}
          className="w-full inline-block text-center text-sm text-blue-600 underline"
        >
          Dont have an account? Sign Up
        </Link>
      </form>
    </div>
  );
};

export default FormSignIn;
