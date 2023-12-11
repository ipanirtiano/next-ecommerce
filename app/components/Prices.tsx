type Props = {};

const Prices = (props: Props) => {
  return (
    <div className="w-full pb-5 border-b border-gray-300">
      <p className="text-sm text-gray-800 font-semibold mb-2">Price</p>
      <div className="w-full space-y-2">
        <div>
          <p className="text-xs opacity-95">Min</p>
          <input
            className="w-full outline-none border border-gray-200 roundedxs bg-gray-100 px-2 py-1 text-xs"
            type="text"
          />
        </div>
        <div>
          <p className="text-xs opacity-95">Max</p>
          <input
            className="w-full outline-none border border-gray-200 rounded-sm bg-gray-100 px-2 py-1 text-xs"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
