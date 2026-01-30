import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ShoppingOutlined } from "@ant-design/icons";
import Prices from "./prices";

const CardTotal = () => {
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  return (
    <div>
      {/* TITLE */}
      <h3 className="pb-5 text-[#3D3D3D] border-b border-[#46A358] font-bold text-[18px]">
        Card Total
      </h3>

      {/* COUPON */}
      <Form className="flex h-[48px] mt-[35px]">
        <input
          name="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Enter coupon code here..."
          className="w-4/5 border border-[#46A358] pl-[15px] placeholder:font-light rounded-l-lg outline-none text-[14px]"
        />

        <button
          type="button"
          className="bg-[#46A358] flex items-center justify-center gap-1 text-base text-white w-1/5 rounded-r-lg"
        >
          Apply
        </button>
      </Form>

    <Prices/>
      <div className="mt-6 space-y-3 text-[15px]">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$0</span>
        </div>

             <div className="flex justify-between">
          <span>Coupon Discount</span>
          <span>$0</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>$16.00</span>
        </div>

        <div className="flex justify-between font-bold text-[16px] text-[#46A358]">
          <span>Total</span>
          <span>$0</span>
        </div>
      </div>

     
      <button
        onClick={() => navigate("/proceed-checkout")}
        className="bg-[#46A358] flex rounded-md items-center justify-center gap-1 text-base text-white w-full h-[48px] mt-[30px]"
      >
        <ShoppingOutlined />
        Proceed To Checkout
      </button>

      {/* CONTINUE SHOPPING */}
      <Link to="/" className="flex justify-center mt-[14px]">
        <button className="text-[#46A358] cursor-pointer text-[14px]">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default CardTotal;
