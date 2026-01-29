import type { CategoryType, QueryType } from "../../../@types";
import { LoaderApi } from "../../../generic/loader";
import { useSearchParamsHandler } from "../../../hooks/paramsApi";
import { useQueryHandler } from "../../../hooks/useQuery"
import Discount from "./discount";
import Price from "./price";


const Category = () => {
    const{setParam, getParam} = useSearchParamsHandler()
    let category = getParam("category") || "house-plants";
    const {data, isLoading, isError} :QueryType<CategoryType[]> = useQueryHandler({
        url: "flower/category",
         pathname:"category"

    });
const {categoryLoader} =LoaderApi();
  return (
    <div className="bg-[#f2f2f2] p-4 rounded-[5px]">
        <h2 className="text-[#3d3d3d] font-bold">Categories</h2>
        <div className="p-2 flex flex-col gap-5">
            {isLoading || isError 
            ? categoryLoader()
            :data?.map((value)=>
                (
                <div
                onClick={()=>setParam({category: value.route_path})}
                key={value._id} className={`flex items-center justify-between hover:text-main cursor-pointer text-[#3d3d3d] font-medium
                ${category === value.route_path && "text-main"  }`}>
                <h3>{value.title}</h3>
                <h3>({value.count})</h3>
            </div>
           ) )}
            
        </div>
        <Price/>
        <Discount/>
    </div>
  )
}

export default Category