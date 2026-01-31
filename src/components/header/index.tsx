import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bell, Menu, X, Search } from "lucide-react";
import { Badge, Drawer } from "antd";

import Logo from "../../assets/img/Logo.svg";
import shop from "../../assets/img/shop.svg";

import {
  useReduxDispatch,
  useReduxSelector,
} from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-store";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { user, isAuth } = useReduxSelector((state) => state.userSlice);
  const { data: cart } = useReduxSelector((state) => state.shopSlice);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#46A35833]">
      <div className="w-[90%] max-w-[1400px] mx-auto py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[120px]" />
        </Link>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`${
              pathname === "/" ? "text-[#46A358] font-bold" : ""
            } text-[16px] text-[#3D3D3D] hover:text-[#46A358]`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog" ? "text-[#46A358] font-bold" : ""
            } text-[16px] text-[#3D3D3D] hover:text-[#46A358]`}
          >
            Blog
          </Link>
        </nav>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-5">
          
          {/* SEARCH */}
          <button
            onClick={() => navigate("/shop")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition"
            title="Search"
          >
            <Search size={20} />
          </button>

          {/* NOTIFICATION */}
          <Bell className="cursor-pointer hover:text-[#46A358]" />

          {/* CART */}
          <button
            onClick={() => navigate("/shop")}
            className="cursor-pointer"
          >
            <Badge count={cart.length} offset={[0, 3]}>
              <img src={shop} alt="Cart" />
            </Badge>
          </button>

          {/* USER / LOGIN */}
          <button
            onClick={() => {
              if (isAuth) return navigate("/profile");
              dispatch(setAuthorizationModalVisibility());
            }}
            className="bg-[#46A358] hover:bg-[#3d8f4d] transition-all rounded-md text-white px-6 py-2 font-medium"
          >
            {isAuth ? user?.name : "Login"}
          </button>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">
          <Search
            className="cursor-pointer"
            onClick={() => navigate("/shop")}
          />
          <Menu
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>
      </div>

      {/* DRAWER (MOBILE MENU) */}
      <Drawer
        placement="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        closable={false}
        width={280}
        styles={{ body: { padding: 0 } }}
        title={
          <div className="flex items-center justify-between">
            <img src={Logo} alt="Logo" className="w-[100px]" />
            <X
              className="cursor-pointer"
              onClick={() => setIsDrawerOpen(false)}
            />
          </div>
        }
      >
        <div className="flex flex-col gap-4 p-5">
          <Link to="/" onClick={() => setIsDrawerOpen(false)}>Home</Link>
          <Link to="/blog" onClick={() => setIsDrawerOpen(false)}>Blog</Link>

          <div className="h-px bg-gray-200 my-2" />

          <button
            // onClick={() => navigate("/shop")}
            // className="flex items-center gap-3"
          >
            <Search size={18} /> Search
          </button>

          <button
            onClick={() => navigate("/shop")}
            className="flex items-center gap-3"
          >
            <img src={shop} className="w-5" /> My Cart
          </button>

          <button
            onClick={() => {
              if (isAuth) navigate("/profile");
              else dispatch(setAuthorizationModalVisibility());
              setIsDrawerOpen(false);
            }}
            className="bg-[#46A358] text-white py-2 rounded-md mt-4"
          >
            {isAuth ? "My Profile" : "Login"}
          </button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
