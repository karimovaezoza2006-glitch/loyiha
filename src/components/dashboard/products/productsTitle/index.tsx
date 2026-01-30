import { Select } from "antd";

import { products_title } from "../../../../utils";
import { useSearchParamsHandler } from "../../../../hooks/paramsApi";

const ProductsTitle = () => {
  const {setParam, getParam} = useSearchParamsHandler();
  let category = getParam("category") || "house-plants";
  let range_max = getParam("range_max") || 1000;
  let range_min = getParam("range_min") || 0;
  let type = getParam("type") || "all-plants";
  let sort = getParam("sort") || "default-sorting";
  const changed= (e: string)=>{
  setParam({sort:e})
  }
return(
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-4 cursor-pointer">

      {products_title.map((value)=>(
        <h3 onClick={()=> 
          setParam
          ({category,
            range_min,
             range_max, 
              type: value.route_path})}
         className={`hover:text-main ${value.route_path === type && "text-main font-bold" }`}
          key={value.id}>{value.title}</h3>
      ))}
    </div>
    <div className="flex items-center gap-2">
      Short by:
      <Select
      onChange={changed}
        value={sort}
        style={{ width: 150 }}
        options={[
          { value: "default-sorting", label: "Default Sorting" },
            { value: "the-cheapest", label: "The Cheapest" },
            { value: "most-expensive", label: "Most Expensive" },
        ]}
      />
    </div>
  </div>
)
}
export default ProductsTitle;