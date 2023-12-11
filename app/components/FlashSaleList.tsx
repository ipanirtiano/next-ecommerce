/* eslint-disable @next/next/no-img-element */
type Props = {
  src: any;
};

const FlashSaleList = (props: Props) => {
  return (
    <div className="cursor-pointer inline-block w-[110px] h-[110px] md:h-[150px] md:w-[150px] border border-gray-200 bg-gray-100">
      <div className="w-full h-full overflow-hidden flex items-center justify-center">
        <img className="md:h-[100px] h-[60px]" src={props.src} alt="" />
      </div>
      <div className="w-full">
        <h6 className="text-gray-800 mt-1 line-clamp-1">
          Iphone 15 Pro Silver 128GB
        </h6>
        <h6 className="text-orange-600 text-sm">Rp 42.000</h6>
        <div className="flex items-center gap-2">
          <p className="text-xs text-gray-500">
            <del>Rp 90.000</del>
          </p>
          <p className="text-xs font-semibold">-60%</p>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleList;
