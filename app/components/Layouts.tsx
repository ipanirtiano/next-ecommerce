import CategoriesMenu from "./CategoriesMenu";
import Navbar from "./Navbar";
import Prices from "./Prices";

const Layouts = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1290px] mx-auto">
      <Navbar />

      <div className="w-full grid grid-cols-12 gap-2">
        {/* side left */}
        <div className="hidden md:block col-span-2 h-screen overflow-y-scroll bg-white shadow-sm pt-[75px] px-6 space-y-5">
          <CategoriesMenu />
          <Prices />
        </div>
        {/* end side left */}

        {/* Main */}
        <div className="md:col-span-10 col-span-12 md:pt-[75px] pt-[60px] md:px-6 px-4 h-screen overflow-y-scroll scrollbar-hide">
          {children}
        </div>
        {/* end Main */}
      </div>
    </div>
  );
};

export default Layouts;
