import { AiTwotoneStar } from "react-icons/ai";

/* eslint-disable @next/next/no-img-element */
type Props = {};

const ReviewList = (props: Props) => {
  return (
    <div className="w-full border border-gray-200 px-4 py-3 rounded-xl">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2 mt-2">
            <p className="text-base text-yellow-400 flex items-center">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </p>
            <p className="text-xs text-gray-400">(8.9)</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/user.png"
              className="w-[30px] h-[30px] rounded-full object-cover bg-gray-100 p-1"
              alt=""
            />
            <h6 className="text-gray-800">Ipan Irtiano</h6>
          </div>
        </div>

        <div className="text-gray-700">
          <p className="text-sm">22 August 2023</p>
        </div>
      </div>
      <div className="w-ful mt-2 text-gray-800">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto illo
        molestias atque asperiores vero veniam, sapiente odio libero nihil
        numquam?
      </div>
    </div>
  );
};

export default ReviewList;
