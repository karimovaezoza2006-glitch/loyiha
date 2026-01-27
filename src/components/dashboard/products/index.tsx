import { useQueryHandler } from "../../../hooks/useQuery"

const Products = () => {
  const {data} = useQueryHandler({
    url: "flower/category/house-plants", 
    pathname:"products",
  });
  console.log(data)
  return (
    <div>Products</div>
  )
}

export default Products