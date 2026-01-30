import { Select } from "antd";
import { useSearchParamsHandler } from "../../../../hooks/paramsApi";

const ProductsTitle = () => {

  const { setParam, getParam } = useSearchParamsHandler();
  const category = getParam("category") || "house-plants";
  const range_max = getParam("range_max") || 1000;
  const range_min = getParam("range_min") || 0;
  const type = getParam("type") || "all-plants";
  const sort = getParam("sort") || "default-sorting";


console.log(getParam("category"))

  const handleChange = (value: string) =>{
    setParam({category, range_min, range_max,  sort: value, type});
  
};
return(
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-4 cursor-pointer">Seeds</div>
    <div className="flex items-center gap-2">
      Short by:
      <Select
        value={sort}
        style={{ width: 150 }}
        onChange={handleChange}
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