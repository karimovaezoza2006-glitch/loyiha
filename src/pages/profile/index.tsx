import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, message } from "antd";
import ProfileSidebar from "./ProfileSidebar";


import { ExclamationCircleFilled } from "@ant-design/icons";
import { useReduxDispatch } from "../../hooks/useRedux";
import { logout } from "../../redux/user-slice";
import Header from "../../components/header";
import Footer from "../../components/footer";
import NewsletterSection from "../home/NewsletterSection";
const Profile = () => {
  const { tab } = useParams();
  const activeTab = tab || "account-details";
  const dispatch = useReduxDispatch();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const confirmLogout = () => {
    dispatch(logout());
    message.success("Tizimdan chiqildi");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="w-full flex justify-center mt-10 mb-20">
   
      <div className="w-full max-w-[1400px] px-4 flex flex-col md:flex-row gap-10">
        <ProfileSidebar
          activeTab={activeTab}
          onLogout={() => setShowLogoutModal(true)}
        />

     

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
    </div>
    <NewsletterSection/>
    <Footer/>
    </>
  
  );
};

export default Profile;
