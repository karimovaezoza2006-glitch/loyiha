import { Slider } from "antd";
import { useState } from "react";
import { useSearchParamsHandler } from "../../../../hooks/paramsApi";

const Price = () => {
  const [slider, setSlider] = useState<number[]>([0, 1000]);
const {setParam, getParam}= useSearchParamsHandler()
  let type = getParam("type") || "all-plants";
let category = getParam("category") || "house-plants";
  let sort = getParam("sort") || "default-sorting";
  const changeSlider = (value: number[] | number) => {

    if (Array.isArray(value)) {
      setSlider(value);
    }
  };

  return (
    <div className="mt-5">
      <h3 className="text-[#3d3d3d] font-bold">Price Range</h3>

      <Slider
        range
        min={0}
        max={1000}
        value={slider}
        onChange={changeSlider}
      />

      <div className="mt-2">
        Price{" "}
        <span className="text-[#46a358] text-[15px] font-bold ml-4">
          {slider[0]}$ — {slider[1]}$
        </span>

      </div>
      <button onClick={()=> 
      setParam({
        category,
         range_min: slider[0], 
         range_max: slider[1], 
         type,
        sort,
      })}
       className="bg-[#46a358] rounded-lg font-medium text-[#fff] p-[7px_25px] w-full cursor-pointer">Filter</button>
    </div>
  );
};

export default Price;
