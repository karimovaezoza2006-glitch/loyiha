import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/img/Logo.svg"
import {Search, Bell}from "lucide-react"
import Shop from "../../assets/img/Shop.svg"
const Header = () => {
  const {pathname} =useLocation();
  return (
    <div className="py-3 border-b border-[#00800043]">
      <div className="w-[90%] m-auto flex items-center justify-between ">
      <img src={Logo}/>

 <div className="flex items-center gap-5">
          <Link
            to="/"
            className={`font-medium ${
              pathname === "/" ? "text-main" : "text-black"
            }`}
          >
            Home
          </Link>

          <Link
            to="/blog"
            className={`font-medium ${
              pathname === "/blog" ? "text-main" : "text-black"
            }`}
          >
            Blog
          </Link>
        </div>


           <div className="flex items-center gap-5">
          <Search />
          <Bell />
          <img src={Shop}/>
          <button  className="bg-main rounded-lg font-medium text-white p-[7px_12px] cursor-pointer">Login</button>
        </div>

    </div>
    </div>
  )
}

export default Header