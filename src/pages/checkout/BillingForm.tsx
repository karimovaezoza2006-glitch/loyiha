import { useState } from "react";
import { useSelector } from "react-redux";
import OrderSuccessModal from "./OrderSuccessModal";

const BillingForm = () => {
  const Input = ({
    label,
    required,
    placeholder,
  }: {
    label: string;
    required?: boolean;
    placeholder?: string;
  }) => (
    <div className="flex flex-col gap-1">
      <label className="text-[14px] text-[#3D3D3D]">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        placeholder={placeholder}
        className="
          w-full h-[44px]
          border border-[#D9D9D9]
          rounded-md px-4
          outline-none
          focus:border-[#4096ff]
        "
      />
    </div>
  );

  // modal state and cart data
  const [open, setOpen] = useState(false);
  const data = useSelector((state: any) => state.cart?.data || []);

  return (
    <div className="w-full bg-white py-8 px-6 rounded-xl shadow-md">
      {/* FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <Input label="First name" required />
        <Input label="Last name" required />

        <Input label="Country / Region" required />
        <Input label="Town / City" required />

        <Input label="Street Address" required />
        <Input
          label="Apartment"
          placeholder="Enter your apartment..."
        />

        <Input label="State" required />
        <Input label="Zip" required />

        <Input label="Email address" required />

        {/* PHONE */}
        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-[#3D3D3D]">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div
            className="
              flex h-[44px]
              border border-[#D9D9D9]
              rounded-md overflow-hidden
              focus-within:border-[#4096ff]
            "
          >
            <span className="flex items-center px-3 text-sm text-gray-500 border-r">
              +998
            </span>
            <input
              className="flex-1 px-4 outline-none"
              placeholder="953464454"
            />
          </div>
        </div>
      </div>

  
      {/* COMMENT */}
      <div className="mt-6">
        <label className="text-[14px] text-[#3D3D3D] block mb-2">
          Comment
        </label>
        <textarea
          rows={4}
          placeholder="Enter your comment..."
          className="
            w-full border border-[#D9D9D9]
            rounded-md px-4 py-3
            outline-none resize-none
            focus:border-[#4096ff]
          "
        />
      </div>

      {/* PLACE ORDER */}
      <button
        onClick={() => setOpen(true)}
        className="
          w-full mt-8
          bg-[#46A358]
          text-white
          h-[48px]
          rounded-md
          font-medium
          text-[16px]
        "
      >
        Place order
      </button>

      {/* MODAL */}
      <OrderSuccessModal
        open={open}
        onClose={() => setOpen(false)}
        cart={data}
      />
    </div>
  );
};

export default BillingForm;
