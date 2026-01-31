import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { message, Modal } from "antd";
import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  SolutionOutlined,
  LogoutOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import type { AuthType } from "../../@types";
import { logout } from "../../redux/user-slice";
import MyProducts from "./tabs/MyProducts";
import Wishlist from "./tabs/Wishlist";
import TrackOrder from "./tabs/TrackOrder";
import Address from "./tabs/Address";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();
  const { tab } = useParams();
  const activeTab = tab || "account-details";
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [userData, setUserData] = useState<AuthType>(() => {
    const cookieUser = Cookies.get("user");
    return cookieUser
      ? JSON.parse(cookieUser)
      : {
          name: "",
          surname: "",
          email: "",
          phone_number: "",
          username: "",
        };
  });

  const menuItems = [
    { key: "account-details", label: "Account Details", icon: <UserOutlined /> },
    { key: "my-products", label: "My Products", icon: <ShoppingOutlined /> },
    { key: "address", label: "Address", icon: <EnvironmentOutlined /> },
    { key: "wishlist", label: "Wishlist", icon: <HeartOutlined /> },
    { key: "track-order", label: "Track Order", icon: <SolutionOutlined /> },
  ];

  const confirmLogout = () => {
    dispatch(logout());
    message.success("Muvaffaqiyatli tizimdan chiqildi!");
    navigate("/");
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    Cookies.set("user", JSON.stringify(userData));
    message.success("Changes saved successfully!");
  };

  return (
    <div className="w-[90%] max-w-[1400px] ">
      <div className="flex gap-10">
       
        <div className="w-[260px] shrink-0 bg-[#FBFBFB] rounded-md py-4">
          <h2 className="text-[18px] font-bold text-[#3D3D3D] px-6 mb-4">
            My Account
          </h2>

          <ul>
            {menuItems.map((item) => (
              <li
                key={item.key}
                onClick={() => navigate(`/profile/${item.key}`)}
                className={`cursor-pointer flex items-center gap-3 px-6 py-3 transition-all ${
                  activeTab === item.key
                    ? "text-[#46A358] font-bold border-l-[5px] border-[#46A358] bg-white pl-[19px]"
                    : "text-[#727272] hover:text-[#46A358]"
                }`}
              >
                <span className="text-[18px]">{item.icon}</span>
                {item.label}
              </li>
            ))}

            <li
              onClick={() => setShowLogoutModal(true)}
              className="cursor-pointer flex items-center gap-3 px-6 py-3 text-[#727272] hover:text-red-500 border-t mt-4 pt-4"
            >
              <LogoutOutlined />
              Log out
            </li>
          </ul>
        </div>


        <div className="flex-1">
          {activeTab === "account-details" && (
            <>
              <h2 className="text-[18px] font-bold text-[#3D3D3D] mb-8">
                Personal Information
              </h2>

              <form onSubmit={handleSave}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 max-w-[900px]">
                  <Input label="First name" name="name" value={userData.name} onChange={handleChange} />
                  <Input label="Last name" name="surname" value={userData.surname} onChange={handleChange} />
                  <Input label="Email" name="email" value={userData.email} onChange={handleChange} />

                 
                  <div>
                    <label className="text-[15px]">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex border rounded mt-2 overflow-hidden">
                      <span className="px-3 bg-gray-100 border-r flex items-center">
                        +998
                      </span>
                      <input
                        name="phone_number"
                        value={userData.phone_number}
                        onChange={handleChange}
                        className="w-full px-3 py-2 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <Input label="Username" name="username" value={userData.username} onChange={handleChange} />

                 
                  <div>
                    <label className="text-[15px]">
                      Image <span className="text-red-500">*</span>
                    </label>
                    <label className="mt-2 inline-flex items-center gap-2 border rounded px-4 py-2 cursor-pointer hover:bg-gray-50">
                      ⬆ Upload
                      <input type="file" hidden />
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-10 w-full max-w-[900px] bg-[#46A358] hover:bg-[#3d8f4d] text-white py-3 rounded font-medium"
                >
                  Save changes
                </button>
              </form>
            </>
          )}

          {activeTab === "address" && (
            <Address user={userData} setUser={setUserData} />
          )}
          {activeTab === "my-products" && <MyProducts />}
          {activeTab === "wishlist" && <Wishlist />}
          {activeTab === "track-order" && <TrackOrder />}
        </div>
      </div>

      {/* LOGOUT MODAL */}
      <Modal
        centered
        open={showLogoutModal}
        onOk={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
        okText="Log out"
        okButtonProps={{ danger: true }}
        title={
          <div className="flex items-center gap-2 text-red-500">
            <ExclamationCircleFilled /> Confirm Logout
          </div>
        }
      >
        Are you sure you want to log out from your account?
      </Modal>
    </div>
  );
};

const Input = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2">
    <label className="text-[15px]">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      {...props}
      required
      className="w-full border rounded px-3 py-2 focus:outline-[#46A358]"
    />
  </div>
);

export default Profile;
