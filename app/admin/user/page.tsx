import Link from "next/link";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import prisma from "@/prisma/prisma_db";
import DeleteUserAdmin from "./delete/page";
import LayoutsAdmin from "../componentsAdmin/LayoutAdmin";

// get all user from database
const getAllUser = async () => {
  try {
    const users = await prisma.admin.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  // declare the users
  const users = await getAllUser();

  return (
    <LayoutsAdmin>
      <div className="w-full">
        <h1 className="text-3xl font-semibold text-gray-700">User Admin</h1>

        <Link
          href="/admin/user/add"
          className="mt-[20px] gap-2 flex items-center text-blue-600 w-[160px] hover:underline"
        >
          <AiOutlineUserAdd />
          Add new user
        </Link>

        <div className="overflow-x-auto mt-[10px]">
          <table className="table">
            {/* head */}
            <thead className="bg-base-200">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={user.id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td className="flex items-center gap-4">
                    <Link
                      href={`/admin/user/${user.id}`}
                      className="gap-1 flex items-center text-blue-600 hover:underline"
                    >
                      <BsPen className="text-sm" />
                      Update
                    </Link>

                    <DeleteUserAdmin title={"User"} data={user} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </LayoutsAdmin>
  );
};

export default page;
