"use client";
import { categories } from "@prisma/client";
import { useState } from "react";
import { BsTrash3 } from "react-icons/bs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteCategories = ({
  title,
  data,
}: {
  title: string;
  data: categories;
}) => {
  // init use router
  const router = useRouter();
  // state modal box
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // set mutations
  const { mutate: DeleteCategories, isPending: deleteCategoriesLoading } =
    useMutation({
      mutationFn: async () => {
        return axios.delete(`/api/categories/${data.id}`);
      },
      onError: (error) => {
        console.log(error);
      },
      onSuccess: () => {
        // redirect to user page
        router.push("/admin/categories");
        router.refresh();
        setIsOpen(false);
      },
    });

  // function handle delete
  const handleDelete = () => {
    // run mutations delete user
    DeleteCategories();
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="gap-1 flex items-center text-red-600 hover:underline"
      >
        <BsTrash3 className="text-sm" />
        Delete
      </button>

      <div className={isOpen ? "modal modal-open" : "modal"}>
        <div className="modal-box">
          <h3 className="font-bold text-xl mb-3">Delete {title}</h3>

          <p>
            Are you sure to delete{" "}
            <span className="font-semibold underline">
              {data.category_name}
            </span>
            <span className="font-semibold underline"></span> ?
          </p>
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
                {deleteCategoriesLoading ? (
                  <div className="flex items-center gap-2">
                    <span className="loading loading-spinner loading-sm"></span>
                    Loading...
                  </div>
                ) : (
                  "Delete"
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategories;
