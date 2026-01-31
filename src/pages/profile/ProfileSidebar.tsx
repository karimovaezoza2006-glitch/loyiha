import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  ShoppingOutlined,
  EnvironmentOutlined,
  HeartOutlined,
  SolutionOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

type Props = {
  activeTab: string;
  onLogout: () => void;
};

const ProfileSidebar = ({ activeTab, onLogout }: Props) => {
  const navigate = useNavigate();

  const menuItems = [
    { key: "account-details", label: "Account Details", icon: <UserOutlined /> },
    { key: "my-products", label: "My Products", icon: <ShoppingOutlined /> },
    { key: "address", label: "Address", icon: <EnvironmentOutlined /> },
    { key: "wishlist", label: "Wishlist", icon: <HeartOutlined /> },
    { key: "track-order", label: "Track Order", icon: <SolutionOutlined /> },
  ];

  return (
    <div className="w-full md:w-[25%] bg-[#FBFBFB] rounded-md py-4">
      <h2 className="text-[18px] font-bold text-[#3D3D3D] px-6 mb-4">My Account</h2>

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
          onClick={onLogout}
          className="cursor-pointer flex items-center gap-3 px-6 py-3 text-[#727272] hover:text-red-500 border-t mt-4 pt-4"
        >
          <LogoutOutlined />
          Log out
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
