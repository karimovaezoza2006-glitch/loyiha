import { Slider } from "antd"
import { useState } from "react"


const Price = () => {
    const [slider, setSlider] = useState<number[]>([0, 1000]);
    const changeSlider = (e:any) =>{
        setSlider(e)
    }
    console.log(slider)
  return (
    <div className="mt-5">
        <h3 className="text-[#3d3d3d] font-bold">Price Range</h3>
        <Slider
        onChange={changeSlider}
         range
          defaultValue={[0, 1000]} 
          max={1000}
          min={0}
          />
        <div>
            Price {" "}
            <span className="text-[#46a358] text-[15px] font-bold ml-4" >
                0$   1000$
                </span>
                </div>
    </div> 
  )
}

export default Price