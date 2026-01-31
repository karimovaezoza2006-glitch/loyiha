import { useEffect, useState } from "react";
import { Skeleton, Empty } from "antd";
import { useQueryHandler } from "../../../hooks/useQuery";
import type { ProductType } from "../../../@types";
import Card from "../../../components/dashboard/products/card";

const MyProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const targetIds = [
    "68035921f2a99d0247955fc4",
    "66d8016d1acc9b0ff58b0e0d",
  ];

  const { data: housePlantsData, isLoading: load1 } = useQueryHandler({
    url: "flower/category/house-plants",
    pathname: "category-house-plants",
  });

  const { data: smallPlantsData, isLoading: load2 } = useQueryHandler({
    url: "flower/category/small-plants",
    pathname: "category-small-plants",
  });

  useEffect(() => {
    const list1: ProductType[] = Array.isArray(housePlantsData)
      ? housePlantsData
      : [];
    const list2: ProductType[] = Array.isArray(smallPlantsData)
      ? smallPlantsData
      : [];

    const allProducts = [...list1, ...list2];
    const filtered = allProducts.filter((p) =>
      targetIds.includes(p._id)
    );

    setProducts(filtered);
  }, [housePlantsData, smallPlantsData]);

  const isLoading = load1 || load2;

  /* ================= LOADING ================= */
  if (isLoading) {
    return (
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-8
          gap-y-10
        "
      >
        {Array.from({ length: 3 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-3 flex flex-col gap-4"
          >
            <Skeleton.Image active style={{ width: "100%", height: 300 }} />
            <Skeleton.Input active size="small" style={{ width: "85%" }} />
            <Skeleton.Input active size="small" style={{ width: "60%" }} />
          </div>
        ))}
      </div>
    );
  }

  /* ================= CONTENT ================= */
  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div
          className="
            grid
            grid-cols-1          /* 📱 mobile */
            sm:grid-cols-2       /* 📲 tablet */
            lg:grid-cols-3       /* 💻 desktop */
            gap-x-8
            gap-y-12
          "
        >
          {products.map((product) => (
            <Card key={product._id} {...product} />
          ))}
        </div>
      ) : (
        <div className="mt-12">
          <Empty description="Tanlangan gullar topilmadi" />
        </div>
      )}
    </div>
  );
};

export default MyProducts;
