/* eslint-disable @next/next/no-img-element */
type Props = {};

const Payment = (props: Props) => {
  return (
    <div className="w-full mt-[50px] md:py-[30px] py-6 border-t border-b border-gray-200">
      <p className="opacity-75 font-semibold mb-1 md:text-xl text-sm">
        Official Payment
      </p>
      <div className="w-full grid grid-cols-7 gap-3 items-center">
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/bca.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/bni.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/bri.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/creditcard.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/mandiri.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/visa.png" alt="" />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[100px]" src="/payment/atm_bersama.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
