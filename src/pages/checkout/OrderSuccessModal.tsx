import { Modal } from "antd";
import OrderItem from "./OrderItem";

const OrderSuccessModal = ({
  open,
  onClose,
  cart,
}: any) => {
  const shipping = 16;

  const subtotal = cart.reduce(
    (sum: number, item: any) =>
      sum + item.price * item.counter,
    0
  );

  const total = subtotal + shipping;

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={760}
      centered
    >
      <h2 className="text-xl font-semibold mb-6">
        Order Confirmation
      </h2>

      {/* TOP INFO */}
      <div className="grid grid-cols-4 gap-4 text-sm border-b pb-4 mb-6">
        <Info label="Order Number" value={Date.now()} />
        <Info
          label="Date"
          value={new Date().toDateString()}
        />
        <Info label="Total" value={`$${total}`} />
        <Info
          label="Payment Method"
          value="Cash on delivery"
        />
      </div>

      <h3 className="font-semibold mb-3">
        Order Details
      </h3>

      {/* PRODUCTS */}
      <div className="space-y-3">
        {cart.map((item: any) => (
          <OrderItem key={item._id} item={item} />
        ))}
      </div>

      {/* TOTAL */}
      <div className="border-t mt-5 pt-4 space-y-2 text-sm">
        <Row label="Shipping" value={`$${shipping}`} />
        <Row
          label="Total"
          value={`$${total}`}
          bold
        />
      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        Your order is currently being processed.
      </p>

      <div className="flex justify-center mt-6">
        <button className="bg-[#46A358] text-white px-6 py-3 rounded-md">
          Track your order
        </button>
      </div>
    </Modal>
  );
};

export default OrderSuccessModal;

/* HELPERS */
const Info = ({ label, value }: any) => (
  <div>
    <p className="text-gray-400 text-xs">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const Row = ({ label, value, bold }: any) => (
  <div
    className={`flex justify-between ${
      bold
        ? "font-bold text-[#46A358]"
        : ""
    }`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
);
