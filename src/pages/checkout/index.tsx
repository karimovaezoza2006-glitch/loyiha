import { useState } from "react";
import { useSelector } from "react-redux";
import { message } from "antd";

import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";
import CouponBox from "./CouponBox";
import PaymentMethod from "./PaymentMethod";
import SuccessModal from "./SuccessModal";
import Footer from "../../components/footer";
import NewsletterSection from "../home/NewsletterSection";
import Header from "../../components/header";

const CheckoutPage = () => {
   
  const { data } = useSelector((state: any) => state.shopSlice);

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [open, setOpen] = useState(false);

  const subtotal =
    data?.reduce(
      (acc: number, item: any) =>
        acc + item.price * item.counter,
      0
    ) || 0;

  const shipping = 16;
  const total = subtotal + shipping;

  const handleSubmit = () => {
    if (!data || data.length === 0) {
      message.error("Savat bo‘sh!");
      return;
    }
    setOpen(true);
  };

  return (
    
    <div className="bg-[#F9F9F9] min-h-screen  mt-2">
         <Header/>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">

        <BillingForm />

        <div className="w-full lg:w-1/3 space-y-6">
          <OrderSummary
            data={data}
            subtotal={subtotal}
            shipping={shipping}
          />

          <CouponBox subtotal={subtotal} />

          <PaymentMethod
            value={paymentMethod}
            onChange={setPaymentMethod}
            onSubmit={handleSubmit}
          />
        </div>
      </div>

      <SuccessModal
        open={open}
        onClose={() => setOpen(false)}
        total={total}
        paymentMethod={paymentMethod}
      />
      <NewsletterSection/>
      <Footer/>
    </div>
  );
};

export default CheckoutPage;
