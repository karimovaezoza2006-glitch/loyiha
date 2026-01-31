

/* social icons */
import facebook from "../../assets/img/facebook.svg";
import instagram from "../../assets/img/instagram.svg";
import twitter from "../../assets/img/twitter.svg";
import linkedin from "../../assets/img/linkedin.svg";
import youtube from "../../assets/img/youtube.svg";

/* payment icons */
import paypal from "../../assets/img/paypal.svg";

const Footer = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

  const listStyle =
    "cursor-pointer hover:text-[#46A358] hover:translate-x-1 transition-all duration-200";

  return (
    <footer className="bg-white border-t border-green-200">
      <div className="max-w-[1400px] mx-auto px-4 py-14">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        
        >
          <div >
            <h3 className="font-semibold text-lg mb-4">My Account</h3>
            <ul className="space-y-2 text-gray-600">
              <li className={listStyle}>My Account</li>
              <li className={listStyle}>Our stores</li>
              <li className={listStyle}>Contact us</li>
              <li className={listStyle}>Career</li>
              <li className={listStyle}>Specials</li>
            </ul>
          </div>

          
          <div >
            <h3 className="font-semibold text-lg mb-4">Help & Guide</h3>
            <ul className="space-y-2 text-gray-600">
              <li className={listStyle}>Help Center</li>
              <li className={listStyle}>How to Buy</li>
              <li className={listStyle}>Shipping & Delivery</li>
              <li className={listStyle}>Product Policy</li>
              <li className={listStyle}>How to Return</li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 text-gray-600">
              <li className={listStyle}>House Plants</li>
              <li className={listStyle}>Potter Plants</li>
              <li className={listStyle}>Seeds</li>
              <li className={listStyle}>Small Plants</li>
              <li className={listStyle}>Accessories</li>
            </ul>
          </div>

        
          <div >
            <h3 className="font-semibold text-lg mb-4">Social Media</h3>

            <div className="flex gap-3 mb-6">
              {[facebook, instagram, twitter, linkedin, youtube].map(
                (icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 border border-green-300 rounded
                    flex items-center justify-center
                    cursor-pointer
                    hover:bg-[#46A358]
                    hover:scale-110
                    transition-all duration-200"
                  >
                    <img
                      src={icon}
                      alt="social"
                      className="w-4 group-hover:brightness-0 invert"
                    />
                  </div>
                )
              )}
            </div>

            <h3 className="font-semibold text-lg mb-4">We accept</h3>
            <div className="flex flex-wrap gap-3">
              <img
                src={paypal}
                alt="paypal"
                className="h-6 cursor-pointer hover:scale-105 transition"
              />
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div
        className="border-t border-green-200 py-4 text-center text-gray-500 text-sm"
        data-aos="fade-up"
      >
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
