import { useQueryHandler } from "../../../hooks/useQuery"


const Category = () => {
    const {data,} = useQueryHandler({
        url: "flower/category",
         pathname:"category"

    });
console.log(data)
  return (
    <div className="bg-[#f2f2f2] p-4 rounded-[5px]">
        <h2 className="text-[#3d3d3d] font-bold">Categories</h2>
        <div className="p-2 flex-col gap-5">
            <div className="flex items-center justify-between hover:text-main cursor-pointer text-[#3d3d3d] font-medium">
                <h3>House Plants</h3>
                <h3>(0)</h3>
            </div>
        </div>
    </div>
  )
}

export default Category