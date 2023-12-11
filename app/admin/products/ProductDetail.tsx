/* eslint-disable @next/next/no-img-element */
const ProductDetail = ({ data }: { data: any }) => {
  const formatRupiah = (money: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <div className="w-full grid grid-cols-12 py-4 gap-5">
      <div className="col-span-3 space-y-4">
        <div className="py-4 w-full flex items-center justify-center border border-gray-400">
          <img
            src={data?.Photo_product[0].image}
            alt=""
            className="w-[80%] object-cover"
          />
        </div>

        <div className="w-full space-x-2 overflow-x-scroll whitespace-nowrap scrollbar-hide">
          {data.Photo_product.map((item: any, i: number) => {
            return (
              <div
                key={i}
                className="inline-block w-[150px] h-[150px] border border-gray-400"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-[90%] h-[90%] object-cover mx-auto"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="col-span-4">
        <div className="text-gray-800">
          <h1 className="text-2xl font-semibold mb-2 uppercase">
            {data.product_name}
          </h1>
          <p className="text-sm text-gray-600">
            {data.Categories.category_name}
          </p>
        </div>

        <div className="mt-[20px]">
          <div className="flex items-center gap-2">
            <p className="font-semibold">Size :</p>
            <p className="text-gray-600 uppercase">{data.size}</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">Colors :</p>
            <p className="text-gray-600 uppercase">{data.color}</p>
          </div>
        </div>

        <div className="mt-[20px]">
          <h6 className="font-semibold">Price</h6>
          <h1 className="text-2xl font-semibold">{formatRupiah(data.price)}</h1>
        </div>
      </div>

      <div className="col-span-5">
        <p className="font-semibold mb-2">Descriptions Product :</p>
        <p>{data.descriptions}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
