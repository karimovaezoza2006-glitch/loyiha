import type { FC } from "react";
import { DeleteFilled } from "@ant-design/icons";
import type { ShopCartType } from "../../../../@types";
import { useReduxDispatch } from "../../../../hooks/useRedux";
import { deleteData } from "../../../../redux/shop-slice";
import { increment } from "../../../../redux/shop-slice";
import { decrement } from "../../../../redux/shop-slice";


const Card: FC<ShopCartType> = (props) => {


  const {
    main_image,
    title,
    _id,
    price,
    counter,
    userPrice,
  } = props;

const dispatch = useReduxDispatch();

  return (
    <div className="my-5 bg-[#f6f6ee] p-2 flex items-center justify-between rounded-lg">
      <div className="flex items-center gap-4 w-[40%]">
        <img className="w-[70px] h-[70px] object-cover"src={main_image} alt={title}/>

        <div>
          <h3 className="text-[16px] font-medium">{title}</h3>

          <p className="text-[14px] pt-[10px] max-sm:text-[12px]">
            <span className="text-[#A5A5A5]">SKU:</span> {_id}
          </p>
        </div>
      </div>

      <div className="text-[#727272] text-[16px] font-medium w-[20%]">
        ${price}
      </div>

      <div className="flex items-center gap-3 w-[20%]">
        <button onClick={()=>dispatch(decrement(_id))} className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center disabled:opacity-50">
          -
        </button>
        <span className="text-[17px]">{counter}</span>
        <button onClick={()=>dispatch(increment(_id))} className="w-[25px] h-[25px] bg-[#46A358] rounded-full text-white flex items-center justify-center" >
          +
        </button>
      </div>

      <div className="text-[#727272] text-[16px] font-medium w-[20%]">{userPrice?.toFixed(2)}$</div>

<DeleteFilled onClick={()=>dispatch(deleteData(_id))} className="text-[#727272] text-[20px] cursor-pointer hover:text-red-500 transition"/>
    </div>
  );
};

export default Card;
