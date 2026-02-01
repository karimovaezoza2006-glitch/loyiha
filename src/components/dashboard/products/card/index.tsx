import type { FC } from "react";
import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import type { ProductType } from "../../../../@types";
import { getData } from "../../../../redux/shop-slice";
import { openPreview } from "../../../../redux/productPreviewSlice";


const Card: FC<ProductType> = (props) => {
  const dispatch = useReduxDispatch();

  const icon_style =
    "bg-[#FFFFFF] w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px] hover:text-[#46A358] transition-colors";

  return (
    <div className="relative w-full">
      <div className="group h-75 bg-[#f5f5f5] flex justify-center items-center relative overflow-hidden rounded-sm">
        <img
          src={props.main_image}
          alt={props.title}
          className="w-full h-full object-contain"
        />

        {/* ACTION ICONS */}
        <div className="hidden gap-3 justify-center absolute bottom-5 items-center group-hover:flex animate-in fade-in slide-in-from-bottom-2">
          
          {/* ADD TO CART */}
          <div
            onClick={() =>
              dispatch(
                getData({
                  ...props,
                  counter: 1,
                })
              )
            }
            className={icon_style}
          >
            <ShoppingCartOutlined />
          </div>

          {/* WISHLIST (hozircha UI) */}
          <div className={icon_style}>
            <HeartFilled />
          </div>

          {/* 🔍 PRODUCT PREVIEW */}
          <div
            onClick={() => dispatch(openPreview(props))} // ✅ SHU YER MUHIM
            className={icon_style}
          >
            <SearchOutlined />
          </div>
        </div>

        {/* DISCOUNT */}
        {props.discount && (
          <div className="bg-[#46A358] text-white absolute top-4 left-0 px-2.5 py-0.75 text-sm font-medium">
            13% OFF
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="mt-2">
        <h3 className="text-[#46a358] text-[16px] font-medium pt-2.5 pb-0.5">
          {props.title}
        </h3>

        <div className="flex items-center gap-3">
          <h1 className="text-[#46A358] text-[18px] font-bold">
            ${props.price}
          </h1>

          {props.discount && props.discount_price && (
            <h1 className="font-light text-[#A5A5A5] line-through text-[16px]">
              ${props.discount_price}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
