"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LayoutsAdmin from "../../componentsAdmin/LayoutAdmin";
import FromUpdataUser from "./FormUpdateUser";

const UpdateUser = ({ params }: { params: { id: string } }) => {
  // set use query
  const { data: dataUser, isLoading: DataUserLoading } = useQuery({
    queryKey: ["user", params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/user/${params.id}`);
      return response.data;
    },
  });

  return (
    <LayoutsAdmin>
      {/* isloading.. */}
      {DataUserLoading ? (
        <div className="absolute left-[50%] top-[50%] translate-y-[-50%]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="w-full">
          <h1 className="text-3xl font-semibold text-gray-700">Update User</h1>

          <div className="w-[360px] mt-[20px]">
            <FromUpdataUser user={dataUser} />
          </div>
        </div>
      )}
    </LayoutsAdmin>
  );
};

export default UpdateUser;
