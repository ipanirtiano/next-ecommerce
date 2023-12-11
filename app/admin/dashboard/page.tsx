import React from "react";
import LayoutsAdmin from "../componentsAdmin/LayoutAdmin";

type Props = {};

const page = (props: Props) => {
  return (
    <LayoutsAdmin>
      <h1 className="text-3xl font-semibold">Dashboard</h1>
    </LayoutsAdmin>
  );
};

export default page;
