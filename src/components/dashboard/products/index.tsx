import Card from "./card";
import type { ProductType, QueryType } from "../../../@types";
import { useQueryHandler } from "../../../hooks/useQuery"

import { useSearchParamsHandler } from "../../../hooks/paramsApi";


const Products = () => {
  const {getParam} =useSearchParamsHandler();
  let category = getParam("category") || "house-plants";
  const {data, } : QueryType<ProductType[]>= 
  useQueryHandler({
    url: `flower/category/${category}`, 
    pathname:`products-${category}`,
  });


  console.log(getParam("category"));
  return (
    <div>
  <div className="grid grid-cols-3 gap-5">
      {data?.map((value) =>(
      <Card key={value._id} {...value}/>
    ))}
  </div>
  
    </div>
  )
}

export default Products