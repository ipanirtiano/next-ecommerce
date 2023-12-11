/* eslint-disable @next/next/no-img-element */

import Layouts from "../components/Layouts";
import Order from "./Order";

type Props = {};

const page = (props: Props) => {
  return (
    <Layouts>
      {/* Detail Cart */}
      <Order />
      {/* end Detail Cart */}
    </Layouts>
  );
};

export default page;
