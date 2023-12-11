import Footer from "@/app/components/Footer";
import Payment from "@/app/components/Payment";
import React from "react";
import DetailProduct from "../DetailProduct";
import Layouts from "@/app/components/Layouts";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <Layouts>
      {/* Detail Product */}
      <DetailProduct product_id={params.slug} />
      {/* end Detail Product */}

      {/* Payment */}
      <Payment />
      {/* end Payment */}

      {/* Footer */}
      <Footer />
      {/* end Footer */}
    </Layouts>
  );
};

export default page;
