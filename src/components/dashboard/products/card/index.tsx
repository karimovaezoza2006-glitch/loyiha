import type { FC } from "react";
import { useState } from "react";
import type { ProductType } from "../../../../@types";


import {
  SearchOutlined,
  ShoppingCartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Modal } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


const Card: FC<ProductType> = (props) => {
  const [open, setOpen] = useState(false);

  const iconStyle =
    "bg-white w-[36px] h-[36px] flex rounded-lg items-center justify-center cursor-pointer text-[18px] hover:bg-[#46A358] hover:text-white transition-all duration-300";

  return (
    <>
      <div
        data-aos="fade-up"
        className="relative bg-white hover:shadow-xl transition-all duration-300"
      >
        <div className="group h-[300px]  flex justify-center items-center relative overflow-hidden">
          <img
            src={props.main_image}
            alt={props.title}
            onClick={() => setOpen(true)}
            className="w-4/5 cursor-pointer group-hover:scale-105 transition-all duration-300"
          />

          <div className="absolute bottom-4 hidden gap-3 group-hover:flex">
            <div className={iconStyle}>
              <ShoppingCartOutlined />
            </div>
            <div className={iconStyle} onClick={() => setOpen(true)}>
              <SearchOutlined />
            </div>
            <div className={iconStyle}>
              <HeartFilled />
            </div>
          </div>
        </div>

        <div className="pt-3">
          <h3 className="text-[#3D3D3D] text-[16px] font-[500]">
            {props.title}
          </h3>

          <div className="flex items-center gap-3 mt-1">
            <span className="text-[#46A358] text-[18px] font-bold">
              {props.price}$
            </span>

            {props.discount && (
              <span className="text-[#A5A5A5] line-through text-[14px]">
                {props.discount_price}$
              </span>
            )}
          </div>
        </div>

        {props.discount && (
          <span className="absolute top-4 left-0 bg-[#46A358] text-white px-2 py-1 text-[12px] font-bold">
            13 % OFF
          </span>
        )}
      </div>

      {/* IMAGE MODAL */}
      <Modal
        open={open}
        footer={null}
        onCancel={() => setOpen(false)}
        centered
      >
        <img
          src={props.main_image}
          alt={props.title}
          className="w-full"
        />
      </Modal>
    </>
  );
};

export default Card;
