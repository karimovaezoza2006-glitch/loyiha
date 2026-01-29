import React from "react";
import plant1 from "../../assets/img/plant1.png";
import plant2 from "../../assets/img/plant2.png";
import plant3 from "../../assets/img/plant3.png";
import plant4 from "../../assets/img/plant4.png";

interface PlantData {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface PlantPromoCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const promoData: PlantData[] = [
  {
    id: 1,
    title: "SUMMER CACTUS & SUCCULENTS",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    image: plant2,
    link: "/shop/cactus",
  },
  {
    id: 2,
    title: "STYLING TRENDS & MUCH MORE",
    description:
      "We are an online plant shop offering a wide range of cheap and trendy plants",
    image: plant1,
    link: "/shop/styling",
  },
];

const PlantPromoCard: React.FC<PlantPromoCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div
      data-aos="fade-up"
      className="
        relative flex flex-col sm:flex-row items-center justify-between
        border border-gray-100 rounded
        bg-gradient-to-br from-[#fbfbfb] to-[#f3f7f4]
        p-6 overflow-hidden h-full
        shadow-sm hover:shadow-xl
        transition-all duration-500
      "
    >
      {/* decorative circles */}
      <div className="absolute z-0 bottom-[-20px] left-[-0px] opacity-40">
        <img src={plant3} alt="" />
      </div>
      <div className="absolute z-0 bottom-[-20px] left-[2px] opacity-40">
        <img src={plant4} alt="" />
      </div>

      {/* image */}
      <div
        data-aos="zoom-in"
        className="z-10 w-full sm:w-1/3 flex justify-center sm:justify-start mb-4 sm:mb-0"
      >
        <img
          src={image}
          alt={title}
          className="
            object-contain
            transition-transform duration-500
            hover:scale-110 hover:-translate-y-1
          "
        />
      </div>

      {/* content */}
      <div
        data-aos="fade-left"
        className="
          z-10 w-full sm:w-2/3
          flex flex-col items-center sm:items-end
          text-center sm:text-right
          pl-0 sm:pl-4
        "
      >
        <h3
          className="
            font-family font-black text-[18px] leading-[133%]
            uppercase text-[#2f2f2f]
            mb-2 max-w-[200px]
          "
        >
          {title}
        </h3>

        <p
          className="
            font-family font-normal text-[14px] leading-[171%]
            text-[#6f6f6f]
            mb-5 max-w-[280px]
          "
        >
          {description}
        </p>

        <a
          href="#"
          className="
            group inline-flex items-center justify-center gap-2
            bg-[#46a358] px-5 py-2.5 rounded-md min-w-[140px]
            font-family font-medium text-[14px] text-white
            transition-all duration-300
            hover:bg-[#357a40] hover:gap-3
          "
        >
          Find More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const PlantPromoSection: React.FC = () => {
  return (
    <section className="w-[90%] mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {promoData.map((item, index) => (
          <div
            key={item.id}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <PlantPromoCard
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlantPromoSection;
