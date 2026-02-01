import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import { useReduxSelector } from "../../../hooks/useRedux";


const CardTotal = () => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  
  const { data } = useReduxSelector((state) => state.shopSlice);


  const subtotal =
    data?.reduce((sum, item) => {
      const price = Number(item.price) || 0;
      const qty = Number(item.counter) || 1;
      return sum + price * qty;
    }, 0) || 0;

  const shipping = 16;
  const couponDiscount = 0;
  const total = subtotal - couponDiscount + shipping;

  return (
    <div>
      
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Cart Total
      </h3>

    
      <Form className="flex h-[48px] mt-[35px]">
        <input
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] rounded-l-lg outline-none"
        />
        <button
          type="button"
          className="bg-[#46A358] text-white w-1/5 rounded-r-lg"
        >
          Apply
        </button>
      </Form>

      <div className="mt-6 space-y-3 text-[15px]">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span>${couponDiscount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold text-[16px] text-[#46A358]">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

 
      <button
        disabled={!data?.length}
        onClick={() => navigate("/proceed-checkout")}
        className="bg-[#46A358] flex items-center justify-center gap-1 text-white w-full h-[48px] mt-[30px] disabled:opacity-50"
      >
        <ShoppingOutlined />
        Proceed To Checkout
      </button>

      <Link to="/" className="flex justify-center mt-[14px]">
        <span className="text-[#46A358] text-[14px]">
          Continue Shopping
        </span>
      </Link>
    </div>
  );
};

export default CardTotal;
