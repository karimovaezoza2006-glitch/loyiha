import { useSelector } from "react-redux";

const OrderSummary = ({ data, subtotal, shipping }: any) => {
  const coupon = useSelector(
    (state: any) => state.coupon?.data
  );

  const discount = coupon?.discount_for || 0;
  const total = subtotal - discount + shipping;

  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="font-bold mb-4">Your Order</h2>

      {data?.map((item: any) => (
        <div key={item._id} className="flex justify-between text-sm mb-2">
          <span>{item.title} x{item.counter}</span>
          <span>${item.price * item.counter}</span>
        </div>
      ))}

      <div className="border-t mt-4 pt-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        {coupon && (
          <div className="flex justify-between text-green-600">
            <span>Coupon</span>
            <span>- ${discount}</span>
          </div>
        )}

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span className="text-[#46A358]">${total}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
