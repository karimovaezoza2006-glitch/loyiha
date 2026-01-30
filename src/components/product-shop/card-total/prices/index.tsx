const Prices = () => {
 

  return (
    <div className="mt-[20px]">
      {/* <div className="flex justify-between items-center pt-3">
        <h3 className={coupon_title_style}>Subtotal</h3>
        <h2 className="text-[#3D3D3D] text-[18px] font-medium">
          ${subtotal.toFixed(2)}
        </h2>
      </div> */}

      {/* <div className="flex justify-between items-center pt-3">
        <h3 className={coupon_title_style}>Coupon Discount</h3>
        <h2 className="text-[#3D3D3D] text-[15px]">
          {coupon ? `-$${totalCoupon.toFixed(2)}` : "$0.00"}
        </h2>
      </div> */}

      {/* <div className="flex justify-between items-center pt-3">
        <h3 className={coupon_title_style}>Shipping</h3>
        <h2 className="text-[#3D3D3D] text-[18px] font-medium">
          ${shipping.toFixed(2)}
        </h2>
      </div> */}

      <div className="flex justify-between items-center">
        {/* <h2 className="text-[#3D3D3D] text-[18px] font-bold">
          Total
        </h2> */}

        {/* <h1 className="text-[#46A358] text-[18px] font-bold">
          $
          {(coupon ? totalPrice - totalCoupon : totalPrice).toFixed(2)}
        </h1> */}
      </div>
    </div>
  );
};

export default Prices;
