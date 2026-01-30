import type { FC } from "react";
import { useState } from "react";
import type { ProductType } from "../../../../@types";

import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartFilled,
} from "@ant-design/icons";

import AOS from "aos";
import "aos/dist/aos.css";

import { useReduxDispatch } from "../../../../hooks/useRedux";
import { getData } from "../../../../redux/shop-slice";

import ProductPreview from "../product-preview";

AOS.init();

const Card: FC<ProductType> = (props) => {
  const [openPreview, setOpenPreview] = useState(false);
  const dispatch = useReduxDispatch();

  const iconStyle =
    "bg-white w-[36px] h-[36px] flex items-center justify-center rounded-lg cursor-pointer text-[18px] hover:bg-[#46A358] hover:text-white transition-all duration-300";

  return (
    <>
      {/* PRODUCT CARD */}
      <div
        data-aos="fade-up"
        className="relative bg-white hover:shadow-xl transition-all duration-300"
      >
        {/* IMAGE */}
        <div className="group h-[300px] flex items-center justify-center relative overflow-hidden">
          <img
            src={props.main_image}
            alt={props.title}
            className="w-4/5 group-hover:scale-105 transition-all duration-300"
          />

          {/* ACTION ICONS */}
          <div className="absolute bottom-4 hidden gap-3 group-hover:flex">
            {/* ADD TO CART */}
            <div
              className={iconStyle}
              onClick={() => dispatch(getData(props))}
            >
              <ShoppingCartOutlined />
            </div>

            {/* QUICK VIEW (FULL PAGE) */}
            <div
              className={iconStyle}
              onClick={() => setOpenPreview(true)}
            >
              <SearchOutlined />
            </div>

            {/* LIKE */}
            <div className={iconStyle}>
              <HeartFilled />
            </div>
          </div>
        </div>

        {/* INFO */}
        <div className="pt-3 px-1">
          <h3 className="text-[#3D3D3D] text-[16px] font-medium">
            {props.title}
          </h3>

          <div className="flex items-center gap-3 mt-1">
            <span className="text-[#46A358] text-[18px] font-bold">
              ${props.price}
            </span>

            {props.discount && (
              <span className="text-[#A5A5A5] line-through text-[14px]">
                ${props.discount_price}
              </span>
            )}
          </div>
        </div>

        {/* DISCOUNT BADGE */}
        {props.discount && (
          <span className="absolute top-4 left-0 bg-[#46A358] text-white px-2 py-1 text-[12px] font-bold">
            SALE
          </span>
        )}
      </div>

      {/* FULL PAGE PRODUCT PREVIEW */}
      <ProductPreview
        open={openPreview}
        onClose={() => setOpenPreview(false)}
        product={props}
      />
    </>
  );
};

export default Card;
