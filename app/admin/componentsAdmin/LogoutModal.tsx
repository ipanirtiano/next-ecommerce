"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AiOutlinePoweroff } from "react-icons/ai";

const LogoutModal = () => {
  // state modal
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // init use router
  const router = useRouter();
  // state loading
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // function handle logout
  const handleLogout = async () => {
    // set loadin true
    setIsLoading(true);
    try {
      const response = await axios.delete("/api/auth/logout");
      router.push("/");
      setIsLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <li
        onClick={() => setIsOpen(!isOpen)}
        className=" hover:bg-gray-100 hover:text-gray-800"
      >
        <button className="px-4 py-2 flex items-center gap-2">
          <AiOutlinePoweroff />
          Log Off
        </button>
      </li>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box text-gray-800">
          <h3 className="font-bold text-xl mb-3">Logout ?</h3>

          <p>
            Are you sure to {""}
            <span className="font-semibold underline">logout?</span>
          </p>
          <div className="modal-action pt-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
            </button>

            <button
              onClick={handleLogout}
              type="submit"
              className="px-4 py-2 bg-purple-700 text-gray-100 rounded-md"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <span className="loading loading-spinner loading-sm"></span>
                  Loading...
                </div>
              ) : (
                "Logout"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
