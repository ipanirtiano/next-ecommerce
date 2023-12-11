/* eslint-disable @next/next/no-img-element */
type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="w-full h-full bg-[#abdbe3] bg-gradient-to-r from-[#abdbe3] relative">
      <div className="flex items-center justify-center gap-3 px-4">
        <div className="w-[400px] text-gray-800 py-4">
          <p className="mb-3">Biggest Offer Revealed</p>
          <h2 className="lg:text-3xl text-xl font-semibold">
            MORE DETAILS INSIDE
          </h2>
          <h2 className="lg:text-3xl text-xl font-semibold md:mb-5 mb-3">
            UP TO 50% OFF
          </h2>

          <button className="py-2 text-xs border border-white/80 px-4 bg-gray-100 rounded-full">
            Get It now
          </button>
        </div>
        <img
          className="hidden sm:block w-[200px] drop-shadow-2xl"
          src="soffa.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
