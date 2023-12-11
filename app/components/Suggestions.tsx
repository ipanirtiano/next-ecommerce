/* eslint-disable @next/next/no-img-element */
type Props = {};

const Suggestions = (props: Props) => {
  return (
    <div className="w-full">
      <div className="md:space-y-2 md:space-x-0 space-x-2 md:block flex">
        <div className="w-full lg:h-[135px] h-[130px] bg-[#e6f0b5] relative">
          <div className="cursor-pointer flex items-center justify-center w-full h-full">
            <img className="h-[120px] object-cover" src="tas1.png" alt="" />
          </div>
        </div>
        <div className="w-full lg:h-[135px] h-[130px] bg-[#e6f0b5] relative">
          <div className="cursor-pointer flex items-center justify-center w-full h-full">
            <img className="h-[120px] object-cover" src="tas2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
