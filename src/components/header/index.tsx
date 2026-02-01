import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bell, Menu, X, Search } from "lucide-react";

import Logo from "../../assets/img/Logo.svg";
import shop from "../../assets/img/shop.svg";

import { useReduxDispatch, useReduxSelector } from "../../hooks/useRedux";
import { setAuthorizationModalVisibility } from "../../redux/modal-store";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useReduxDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            } text-[#3D3D3D] hover:text-[#46A358]`}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`${
              pathname === "/blog" ? "text-[#46A358] font-bold" : ""
            } text-[#3D3D3D] hover:text-[#46A358]`}
          >
            Blog
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-5">
          <Search
            className="cursor-pointer hover:text-[#46A358]"
            onClick={() => navigate("/shop")}
          />

          <Bell className="cursor-pointer hover:text-[#46A358]" />

          <button onClick={() => navigate("/shop")} className="relative">
            {cart?.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#46A358] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
            <img src={shop} alt="Cart" />
          </button>

          <button
            onClick={() => {
              if (isAuth) navigate("/profile");
              else dispatch(setAuthorizationModalVisibility());
            }}
            className="bg-[#46A358] hover:bg-[#3d8f4d] transition text-white px-6 py-2 rounded-md"
          >
            {isAuth ? user?.name : "Login"}
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          <Search onClick={() => navigate("/shop")} className="cursor-pointer" />
          <Menu
            className="w-7 h-7 cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {/* MOBILE MENU (CUSTOM, NO DRAWER) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white p-5 flex flex-col gap-4">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-4">
              <img src={Logo} className="w-[100px]" />
              <X
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            </div>

            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>

            <div className="h-px bg-gray-200 my-2" />

            <button
              onClick={() => {
                navigate("/shop");
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <Search size={18} /> Search
            </button>

            <button
              onClick={() => {
                navigate("/shop");
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-3"
            >
              <img src={shop} className="w-5" /> My Cart
            </button>

            <button
              onClick={() => {
                if (isAuth) navigate("/profile");
                else dispatch(setAuthorizationModalVisibility());
                setIsMenuOpen(false);
              }}
              className="bg-[#46A358] text-white py-2 rounded-md mt-auto"
            >
              {isAuth ? "My Profile" : "Login"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
