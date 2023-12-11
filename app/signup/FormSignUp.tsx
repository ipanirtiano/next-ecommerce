"use client";
import Link from "next/link";
import { useState, SyntheticEvent } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import NotifyMe from "../components/NotifyMe";

const FormSignUp = () => {
  // state from
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState(false);
  // state modal box
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // use mutation post a new user to API
  const { mutate: PostUser, isPending: PostUserLoading } = useMutation({
    mutationFn: async (newUser: any) => {
      const user = await axios.post("/api/client/signup", newUser);
      return user;
    },
    onError: (error) => {
      console.log(error);
      setStatus(false);
      setIsOpen(true);
      setMessage("Opps something went wrong!");
    },
    onSuccess: () => {
      // redirect to user page
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setMessage("User created successfully... Please login.");
      setIsOpen(true);
      setStatus(true);
    },
  });

  // function handle submit
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    // validate form
    if (
      fullName === "" ||
      email === "null" ||
      password === "" ||
      confirmPassword === ""
    )
      return;

    // run mutations
    const data = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    PostUser(data);
  };

  // handle click callback
  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center py-2">
      <div className="pt-10 px-9 pb-4 rounded-lg md:border md:border-gray-200 flex flex-col w-full sm:w-[400px]">
        <h1 className="text-xl font-medium mb-4 opacity-75">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Full Name
          </label>
          <input
            type="text"
            className="p-2 border-gray-500 border-[1px] caret-blue-500 rounded-md w-full mb-4 focus:outline-none placeholder:text-sm text-black"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Email
          </label>
          <input
            type="email"
            className="p-2 border-gray-500 border-[1px] caret-blue-500 rounded-md w-full mb-4 focus:outline-none placeholder:text-sm text-black"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Password
          </label>
          <input
            type="password"
            className="p-2 border-gray-500 border-[1px] rounded-md w-full mb-4 focus:outline-none caret-blue-500 text-black placeholder:text-sm"
            id="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="" className="mb-1 text-sm opacity-75">
            Confirm Password
          </label>
          <input
            type="password"
            className="p-2 border-gray-500 border-[1px] rounded-md w-full mb-4 focus:outline-none caret-blue-500 text-black placeholder:text-sm"
            id="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="p-2 border flex items-center justify-center w-full bg-gray-900 text-white border-gray-500 mt-2 focus:outline-none focus:border-gray-600">
            {PostUserLoading ? (
              <div className="flex items-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Loading...
              </div>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <div className="flex items-center justify-center mt-3 mb-4">
          <Link href="/signin" className="text-sm text-blue-800/75 underline">
            Already have an account?
          </Link>
        </div>
      </div>

      {message && (
        <NotifyMe
          status={status}
          message={message}
          handleClick={handleClick}
          isOpen={isOpen}
        />
      )}
    </div>
  );
};

export default FormSignUp;
