import type { FC } from "react";
import {
  HeartFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

import type { ProductType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { getData } from "../../../../redux/shop-slice";

const Card: FC<ProductType> = (props) => {
  const dispatch = useReduxDispatch();

  const icon_style =
    "bg-white w-[35px] h-[35px] flex rounded-lg justify-center items-center cursor-pointer text-[20px] hover:text-[#46A358] transition-colors shadow-sm";

  return (
    <div className="relative w-full">
      {/* IMAGE */}
      <div className="group h-[300px] bg-[#f5f5f5] flex justify-center items-center relative overflow-hidden rounded-sm">
        <img
          src={props.main_image}
          alt={props.title}
          className="w-full h-full object-contain"
        />

        {/* ICONS */}
        <div className="absolute bottom-5 hidden gap-3 justify-center items-center group-hover:flex transition-all duration-300">
          <div
            onClick={() =>
              dispatch(
                getData({
                  ...props,
                  counter: 1,
                  userPrice: props.userPrice ?? props.price,
                })
              )
            }
            className={icon_style}
          >
            <ShoppingCartOutlined />
          </div>

          <div className={icon_style}>
            <HeartFilled className="text-red-500" />
          </div>

          <div className={icon_style}>
            <SearchOutlined />
          </div>
        </div>

        {/* DISCOUNT */}
        {props.discount && (
          <div className="bg-[#46A358] text-white absolute top-4 left-0 px-2.5 py-1 text-sm font-medium">
            13% OFF
          </div>
        )}
      </div>

      {/* TEXT */}
      <div className="mt-2">
        <h3 className="text-[#3D3D3D] text-[16px] font-medium pt-2 pb-1">
          {props.title}
        </h3>

        <div className="flex items-center gap-3">
          <h1 className="text-[#46A358] text-[18px] font-bold">
            ${props.price}
          </h1>

          {props.discount && props.discount_price && (
            <span className="font-light text-[#A5A5A5] line-through text-[16px]">
              ${props.discount_price}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
