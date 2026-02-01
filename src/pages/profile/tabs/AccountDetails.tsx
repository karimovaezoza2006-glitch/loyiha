import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getUserApi, updateUserApi } from "../../../utils/api";
import toast from "react-hot-toast";

interface Props {
  user?: any;
  setUser?: (u: any) => void;
}

const AccountDetails: React.FC<Props> = ({ user: propUser, setUser }) => {
  const { data: user } = useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserApi,
    enabled: !propUser,
  });

  const mutation = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      toast.success("Changes saved successfully");
      Cookies.set("user", JSON.stringify(data));
      setUser && setUser(data);
    },
    onError: () => toast.error("Failed to save changes"),
  });

  const [form, setForm] = useState<any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
  });
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    const src = propUser ?? user;
    if (src) {
      setForm({
        firstName: src.name || src.firstName || "",
        lastName: src.surname || src.lastName || "",
        email: src.email || "",
        phone: src.phone_number || src.phone || "",
        username: src.username || "",
      });
      if (src.profile_photo) setPreview(src.profile_photo);
    }
    // only want to run when user source changes
  }, [user, propUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    setForm({ ...form, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSave = () => mutation.mutate(form);

  return (
    <div className="border rounded-md p-8 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="First name" name="firstName" value={form.firstName || ""} onChange={handleChange} />
        <Input label="Last name" name="lastName" value={form.lastName || ""} onChange={handleChange} />
        <Input label="Email" name="email" value={form.email || ""} onChange={handleChange} />

        {/* PHONE */}
        <div>
          <label className="text-sm font-medium">
            Phone number <span className="text-red-500">*</span>
          </label>
          <div className="flex border rounded-md mt-2">
            <span className="px-4 flex items-center bg-gray-50 border-r">+998</span>
            <input
              name="phone"
              value={form.phone || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 outline-none"
            />
          </div>
        </div>

        <Input label="Username" name="username" value={form.username || ""} onChange={handleChange} />

        {/* IMAGE */}
        <div>
          <label className="text-sm font-medium">
            Image <span className="text-red-500">*</span>
          </label>
          <label className="mt-2 inline-flex items-center gap-2 border rounded-md px-6 py-2 cursor-pointer hover:bg-gray-50">
            ⬆ Upload
            <input type="file" hidden onChange={handleImage} />
          </label>
          {preview && (
            <img src={preview} alt="preview" className="mt-3 w-24 h-24 object-cover rounded-md" />
          )}
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={mutation.status === 'pending'}
        className={`mt-10 w-full ${mutation.status === 'pending' ? "bg-gray-400" : "bg-[#46A358] hover:bg-[#3d8f4d]"} text-white py-3 rounded-md text-lg font-medium`}
      >
        {mutation.status === 'pending' ? "Saving..." : "Save changes"}
      </button>
    </div>
  );
};

const Input = ({ label, ...props }: any) => (
  <div>
    <label className="text-sm font-medium">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      {...props}
      className="w-full border rounded-md px-4 py-2 mt-2 focus:outline-none focus:border-[#46A358]"
    />
  </div>
);

export default AccountDetails;
