import Card from "./card";
import type { ProductType, QueryType } from "../../../@types";
import { useQueryHandler } from "../../../hooks/useQuery"

import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import ProductsTitle from "./productsTitle";
import { LoaderApi } from "../../../generic/loader";


const Products = () => {
  const {getParam} =useSearchParamsHandler();
  let category = getParam("category") || "house-plants";
  let range_max = getParam("range_max") || 1000;
  let range_min = getParam("range_min") || 0;
  const {data,isLoading, isError } : QueryType<ProductType[]>= 
  useQueryHandler({
    url: `flower/category/${category}`, 
    pathname:`products-${category}-${range_min}-${range_max}`,
    param:{
      range_min, 
      range_max
    }
 
  });

const {productLoader} = LoaderApi()

  return (
    <div>
      <ProductsTitle />
  <div className="grid grid-cols-3 gap-5">
   {isLoading || isError 
   ? productLoader()
  : data?.map((value)=><Card key={value._id} {...value} />)
  }
  </div>
    </div>
  );
};

export default Products