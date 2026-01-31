import React from "react";
import Cookies from "js-cookie";
import { message } from "antd";
import type { AuthType } from "../../../@types";


interface AddressProps {
  user: AuthType | null;
  setUser: (user: AuthType) => void;
}

const Address: React.FC<AddressProps> = ({ user, setUser }) => {
  const handleSaveAddress = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newAddress = {
      country: formData.get("country") as string,
      town: formData.get("town") as string,
      street_address: formData.get("street") as string,
      extra_address: formData.get("extra_address") as string,
      state: formData.get("state") as string,
      zip: formData.get("zip") as string,
    };

    const updatedUser = {
      ...user,
      billing_address: {
        ...user?.billing_address,
        ...newAddress,
      },
    } as AuthType;

    Cookies.set("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    message.success("Address saved successfully!");
  };

  return (
    <div className="w-full">
      <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-8">
        Billing Address
      </h2>

      <form onSubmit={handleSaveAddress}>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-x-10
            gap-y-6
          "
        >
          {/* Country */}
          <Field
            label="Country / Region"
            name="country"
            required
            defaultValue={user?.billing_address?.country}
            placeholder="Type your country..."
          />

          {/* Town */}
          <Field
            label="Town / City"
            name="town"
            required
            defaultValue={user?.billing_address?.town}
            placeholder="Type your town city..."
          />

          {/* Street */}
          <Field
            label="State address"
            name="street"
            required
            defaultValue={user?.billing_address?.street_address}
            placeholder="Type your Street address..."
          />

          {/* Extra */}
          <Field
            label="Extra address"
            name="extra_address"
            required
            defaultValue={user?.billing_address?.extra_address}
            placeholder="Type your Extra address..."
          />

          {/* State */}
          <Field
            label="State"
            name="state"
            required
            defaultValue={user?.billing_address?.state}
            placeholder="Type your state..."
          />

          {/* Zip */}
          <Field
            label="Zip"
            name="zip"
            required
            defaultValue={user?.billing_address?.zip}
            placeholder="Type your Extra zip..."
          />
        </div>

        {/* SAVE */}
        <button
          type="submit"
          className="
            mt-10
            w-full
            bg-[#46A358]
            hover:bg-[#3d8f4d]
            text-white
            py-3
            rounded-md
            text-[16px]
            font-medium
            transition
          "
        >
          Save changes
        </button>
      </form>
    </div>
  );
};

export default Address;

/* ===================== FIELD COMPONENT ===================== */

interface FieldProps {
  label: string;
  name: string;
  required?: boolean;
  defaultValue?: string;
  placeholder?: string;
}

const Field: React.FC<FieldProps> = ({
  label,
  name,
  required,
  defaultValue,
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] text-[#3D3D3D]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="
          border
          border-red-500
          rounded-md
          px-4
          py-2.5
          text-[14px]
          outline-none
          focus:border-[#46A358]
        "
      />

      {required && (
        <span className="text-[12px] text-red-500">
          Please enter {label.toLowerCase()}...
        </span>
      )}
    </div>
  );
};
