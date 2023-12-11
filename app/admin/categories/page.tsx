import Link from "next/link";
import { BsPen } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { categories } from "@prisma/client";
import prisma from "@/prisma/prisma_db";
import axios from "axios";
import LayoutsAdmin from "../componentsAdmin/LayoutAdmin";
import DeleteCategories from "./delete/Page";

// get all categories
const getAllCategories = async () => {
  const response = await prisma.categories.findMany();
  return response;
};

const Page = async () => {
  const dataCategories = await getAllCategories();

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">Categories</h1>

        <Link
          href="/admin/categories/add"
          className="mt-[20px] gap-2 flex items-center text-blue-600 hover:underline"
        >
          <BiCategory />
          Add new categories
        </Link>

        <div className="overflow-x-auto mt-[10px]">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>ID</th>
                <th>Categories Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dataCategories?.map((categorie, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td className="uppercase">{categorie.id}</td>
                    <td>{categorie.category_name}</td>
                    <td className="flex items-center gap-4">
                      <DeleteCategories title={"Categories"} data={categorie} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default Page;
