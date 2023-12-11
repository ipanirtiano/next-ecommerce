import Banner from "./Banner";
import Suggestions from "./Suggestions";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="w-full grid grid-cols-12 gap-2">
      <div className="md:col-span-9 col-span-12">
        <Banner />
      </div>

      <div className="md:col-span-3 hidden md:block">
        <Suggestions />
      </div>
    </div>
  );
};

export default Header;
