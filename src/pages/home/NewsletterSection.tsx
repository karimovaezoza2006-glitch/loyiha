// import { useEffect } from "react";


import garden from "../../assets/img/garden.png";
import renovation from "../../assets/img/renovation.png";
import watering from "../../assets/img/watering.png";

import plantIcon from "../../assets/img/plant.svg";
import mailIcon from "../../assets/img/mail.svg";
import phoneIcon from "../../assets/img/phone.svg";
import logo from "../../assets/img/Logo.svg";

const NewsletterSection = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 900,
  //     once: true,
  //     easing: "ease-out-cubic",
  //   });
  // }, []);

  return (
    <section className="bg-[#f3faf5]">
      {/* TOP */}
      <div className="max-w-[1400px] mx-auto px-4 py-14 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-xl shadow-sm text-center"
        >
          <img src={garden} alt="Garden Care" className="mx-auto mb-4 w-24" />
          <h3 className="font-semibold text-lg">Garden Care</h3>
          <p className="text-sm text-gray-500 mt-2">
            We are an online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white p-6 rounded-xl shadow-sm text-center"
        >
          <img
            src={renovation}
            alt="Plant Renovation"
            className="mx-auto mb-4 w-24"
          />
          <h3 className="font-semibold text-lg">Plant Renovation</h3>
          <p className="text-sm text-gray-500 mt-2">
            We are an online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-white p-6 rounded-xl shadow-sm text-center"
        >
          <img
            src={watering}
            alt="Watering Garden"
            className="mx-auto mb-4 w-24"
          />
          <h3 className="font-semibold text-lg">Watering Garden</h3>
          <p className="text-sm text-gray-500 mt-2">
            We are an online plant shop offering a wide range of cheap and trendy
            plants.
          </p>
        </div>

        {/* Newsletter */}
        <div
          data-aos="fade-left"
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <h3 className="font-semibold text-lg mb-3">
            Would you like to join newsletters?
          </h3>
          <div className="flex">
            <input
              type="email"
              placeholder="enter your email address..."
              className="w-full border border-gray-200 px-3 py-2 rounded-l-md outline-none"
            />
            <button className="bg-green-600 text-white px-5 rounded-r-md hover:bg-green-700 transition">
              Join
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We usually post offers and challenges in newsletter. We're your
            online houseplant destination.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-[#e8f5ec] border-t border-green-200">
        <div className="max-w-[1400px] mx-auto px-4 py-6 grid lg:grid-cols-4 md:grid-cols-2 gap-6 text-sm items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="GreenShop Logo" className="w-36" />
          </div>

          {/* Address */}
          <div className="flex items-center gap-3">
            <img src={plantIcon} className="w-6" />
            <span>70 West Buckingham Ave. Farmingdale, NY 11735</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <img src={mailIcon} className="w-6" />
            <span>contact@greenshop.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <img src={phoneIcon} className="w-6" />
            <span>+88 01911 717 490</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
