import { Radio } from "antd";

const PaymentMethod = ({ value, onChange, onSubmit }: any) => {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="font-bold mb-3">Payment</h2>

      <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
        <Radio value="cash">Cash</Radio>
        <Radio value="bank">Bank</Radio>
        <Radio value="online">Online</Radio>
      </Radio.Group>

      <button
        onClick={onSubmit}
        className="w-full bg-[#46A358] text-white py-3 mt-4"
      >
        Place Order
      </button>
    </div>
  );
};

export default PaymentMethod;
