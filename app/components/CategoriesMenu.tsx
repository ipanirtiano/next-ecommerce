import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const CategoriesMenu = (props: Props) => {
  return (
    <div className="w-full pb-5 border-b border-gray-300">
      <p className="text-sm text-gray-800 font-semibold mb-2">Categories</p>

      <ul className="flex flex-col space-y-1">
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Interiors
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Electronic
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Handphone
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Laptop
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Camera
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Fashion
          <IoIosArrowForward className="opacity-95" />
        </Link>
        <Link
          href="/"
          className="text-sm opacity-95 flex items-center gap-2 justify-between py-1"
        >
          Snikers
          <IoIosArrowForward className="opacity-95" />
        </Link>
      </ul>
    </div>
  );
};

export default CategoriesMenu;
