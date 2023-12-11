"use client";
import { admin } from "@prisma/client";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const CancelOrder = ({ title, data }: { title: string; data: admin }) => {
  // init use router
  const router = useRouter();
  // state modal box
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // set mutations
  const { mutate: deleteOrder, isPending: deleteOrderLoading } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/client/order/${data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      // redirect to order page
      router.push("/order");
      router.refresh();
      setIsOpen(false);
    },
  });

  // function handle delete
  const handleDelete = () => {
    // run mutations delete order
    deleteOrder();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="gap-1 flex items-center text-white bg-red-600 px-2 py-2 rounded-md text-sm"
      >
        <BsTrash3 className="text-sm" />
        Cancel Order
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-3">Cancel {title}</h3>

          <p>Are you sure to Cancel Order ?</p>
          <div className="modal-action">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
            </button>

            <button
              onClick={handleDelete}
              type="button"
              className="px-4 py-2 bg-purple-700 text-gray-100 rounded-md"
            >
              <div className="flex items-center gap-2">
                {deleteOrderLoading ? (
                  <div className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    Loading...
                  </div>
                ) : (
                  "Cancel"
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
