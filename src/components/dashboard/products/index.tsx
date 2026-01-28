import { Card } from "antd";
import type { ProductType, QueryType } from "../../../@types";
import { useQueryHandler } from "../../../hooks/useQuery"

const Products = () => {
  const {data} : QueryType<ProductType[]>= 
  useQueryHandler({
    url: "flower/category/house-plants", 
    pathname:"products",
  });


  // console.log(data)
  return (
    <div>
  <div className="grid grid-cols-3 gap-5">
      {data?.map((value) =>(
      <Card {...value}/>
    ))}
  </div>
  
    </div>
  )
}

export default Products