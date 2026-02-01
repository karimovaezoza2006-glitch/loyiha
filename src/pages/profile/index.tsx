import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import { Modal, message } from "antd";
import ProfileSidebar from "./ProfileSidebar";
import AccountDetails from "./tabs/AccountDetails";
import Address from "./tabs/Address";
import MyProducts from "./tabs/MyProducts";
import Wishlist from "./tabs/Wishlist";
import TrackOrder from "./tabs/TrackOrder";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import { logout } from "../../redux/user-slice";
import Header from "../../components/header";
import NewsletterSection from "../home/NewsletterSection";
import Footer from "../../components/footer";

const Profile = () => {
  const { tab } = useParams();
  const activeTab = tab || "account-details";
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [userData, setUserData] = useState(() => {
    const user = Cookies.get("user");
    return user ? JSON.parse(user) : null;
  });

  const confirmLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    dispatch(logout());
    message.success("Tizimdan chiqildi");
    navigate("/");
  };
<Header/>
  return (

  <div>
    <Header/>
      <div className="w-[90%] max-w-[1400px] m-auto mt-10 mb-20 flex flex-col md:flex-row gap-10">
      <ProfileSidebar
        activeTab={activeTab}
        onLogout={() => setShowLogoutModal(true)}
      />

      <div className="w-full md:w-[70%] lg:w-[75%]">
        {activeTab === "account-details" && (
          <AccountDetails user={userData} setUser={setUserData} />
        )}
        {activeTab === "address" && <Address />}
        {activeTab === "my-products" && <MyProducts />}
        {activeTab === "wishlist" && <Wishlist />}
        {activeTab === "track-order" && <TrackOrder />}
      </div>

      <Modal
        centered
        open={showLogoutModal}
        onOk={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
        okText="Log out"
        cancelText="Cancel"
        okButtonProps={{ danger: true }}
        title={
          <div className="flex items-center gap-2 text-red-500">
            <ExclamationCircleFilled /> Confirm Logout
          </div>
        }
      >
        Accountdan chiqishni xohlaysizmi?
      </Modal>

    </div>
    <NewsletterSection/>
    <Footer/>
  </div>
    
  );
};

export default Profile;
