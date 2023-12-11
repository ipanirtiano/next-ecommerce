/* eslint-disable @next/next/no-img-element */

const ImageProductDetail = ({ product }: { product: any }) => {
  return (
    <div className="space-y-3 col-span-2">
      <div className="border border-gray-200 p-4 h-[300px]">
        <div className="flex items-center justify-center w-full h-full">
          <img
            className="h-[180px]"
            src={product.Photo_product[0].image}
            alt=""
          />
        </div>
      </div>

      <div className="w-full space-x-2 overflow-x-scroll whitespace-nowrap scrollbar-hide">
        {product.Photo_product.map((item: any, i: number) => {
          return (
            <div
              key={i}
              className="inline-block w-[90px] h-[90px] border border-gray-200"
            >
              <div className="flex items-center justify-center w-full h-full">
                <img className="h-[60px]" src={item.image} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageProductDetail;
