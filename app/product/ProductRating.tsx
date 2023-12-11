import { AiTwotoneStar } from "react-icons/ai";

type Props = {};

const ProductRating = (props: Props) => {
  return (
    <div>
      <div className="text-gray-800">
        <h1 className="text-xl font-semibold">Rating Product</h1>
        <span></span>
        <h1 className="text-2xl font-semibold">
          5.0/ <span className="text-gray-500 text-base">5</span>
        </h1>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <p className="text-xl text-yellow-400 flex items-center">
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
          <AiTwotoneStar />
        </p>
        <p className="text-xs text-gray-400">(8.9)</p>
      </div>
    </div>
  );
};

export default ProductRating;
