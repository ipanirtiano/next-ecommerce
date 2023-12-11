/* eslint-disable @next/next/no-img-element */
import Header from "./components/Header";
import Products from "./components/Products";
import Payment from "./components/Payment";
import Footer from "./components/Footer";
import Layouts from "./components/Layouts";

export default function Home() {
  return (
    <Layouts>
      {/* Header */}
      <Header />
      {/* end Header */}

      {/* Flash Sale */}
      {/* <FlashSale /> */}
      {/* end Flase Sale */}

      {/* Products */}
      <Products />
      {/* end Products */}

      {/* Payment */}
      <Payment />
      {/* end Payment */}

      {/* Footer */}
      <Footer />
      {/* end Footer */}
    </Layouts>
  );
}
