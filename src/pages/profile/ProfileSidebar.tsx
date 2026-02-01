import {
  LogoutOutlined,
  UserOutlined,
  ShopOutlined,
  HomeOutlined,
  HeartOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Modal } from "antd";

import Adress from "./tabs/Address";
import Details from "./tabs/Details";
import Products from "../../components/dashboard/products";
import Wishlist from "./tabs/Wishlist";

export const path_profile = [
  {
    id: 1,
    path: "",
    Component: Details,
    Icon: UserOutlined,
    title: "Account Details",
  },
  {
    id: 2,
    path: "my-products",
    Component: Products,
    Icon: ShopOutlined,
    title: "My Products",
  },
  {
    id: 3,
    path: "address",
    Component: Adress,
    Icon: HomeOutlined,
    title: "Address",
  },
  {
    id: 4,
    path: "wishlist",
    Component: Wishlist,
    Icon: HeartOutlined,
    title: "Wishlist",
  },
];

const ProfileDashboard = () => {
  const navigate = useNavigate();

  const logOut = () => {
    Modal.confirm({
      icon: null,
      centered: true,
      closable: true,
      maskClosable: true,
      className: "logout-modal",
      content: (
        <div className="flex flex-col items-center text-center gap-4 py-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-red-100">
            <ExclamationCircleOutlined className="text-red-500 text-2xl" />
          </div>

          <h2 className="text-[18px] font-semibold text-[#3D3D3D]">
            Log out of your account?
          </h2>

          <p className="text-[14px] text-gray-500 leading-relaxed">
            You will be logged out from your account and redirected to the home
            page.
          </p>

          <div className="flex gap-3 w-full mt-4">
            <button
              onClick={() => Modal.destroyAll()}
              className="flex-1 py-2.5 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                Cookies.remove("token");
                Cookies.remove("user");
                Modal.destroyAll();
                navigate("/");
              }}
              className="flex-1 py-2.5 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
            >
              Yes, log out
            </button>
          </div>
        </div>
      ),
      footer: null,
    });
  };

  const dashboard_title_style =
    "transition flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] hover:bg-white hover:border-l-[5px] hover:border-[#46A358] hover:text-[#46A358] hover:font-bold";

  return (
    <div className="bg-[#FBFBFB] h-fit text-xl p-[15px] w-[310px] max-md:hidden">
      <h1 className="font-bold">My Account</h1>

      <div className="flex flex-col gap-3 mt-[10px] border-b border-[#46A35880] pb-[35px]">
        {path_profile.map(({ Icon, id, title, path }) => (
          <div
            key={id}
            onClick={() => navigate(`/profile/${path}`)}
            className={dashboard_title_style}
          >
            <Icon />
            <h3 className="font-normal text-base">{title}</h3>
          </div>
        ))}
      </div>

      <button
        onClick={logOut}
        className="flex items-center gap-3 cursor-pointer pl-[5px] w-full h-[40px] mt-[20px] text-base text-red-600 hover:bg-red-50 rounded transition"
      >
        <LogoutOutlined />
        <h3 className="font-medium">Log out</h3>
      </button>
    </div>
  );
};

export default ProfileDashboard;
