import React from "react";
import { BiSearch } from "react-icons/bi";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div>
      <div className="flex items-center py-2 rounded-full max-md:hidden px-3 border border-gray-300/75">
        <input
          type="text"
          className="outline-none bg-transparent w-[320px] text-sm ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px] px-2"
          placeholder="Search"
          autoComplete="false"
        />
        <button>
          <BiSearch size={20} className="opacity-50" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
