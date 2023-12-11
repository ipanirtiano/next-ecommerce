import Footer from "../components/Footer";
import Layouts from "../components/Layouts";
import Payment from "../components/Payment";
import Cart from "./Cart";

type Props = {};

const page = (props: Props) => {
  return (
    <Layouts>
      {/* Detail Cart */}
      <Cart />
      {/* end Detail Cart */}
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
