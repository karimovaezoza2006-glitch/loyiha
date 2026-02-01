import { HeartOutlined } from "@ant-design/icons";

const PreviewContent = ({ product }: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src={product.main_image}
          className="max-h-[420px] object-contain"
        />
      </div>

      {/* INFO */}
      <div>
        <h2 className="text-2xl font-semibold text-[#3D3D3D]">
          {product.title}
        </h2>

        <p className="text-[#46A358] text-xl font-bold mt-2">
          ${product.price}
        </p>

        <div className="border-t my-4" />

        <h4 className="font-medium mb-1">Short description</h4>
        <p className="text-gray-500 text-sm">
          {product.description || "No description"}
        </p>

        {/* SIZE */}
        <div className="mt-4">
          <p className="font-medium mb-2">Size:</p>
          <div className="flex gap-2">
            {["S", "M", "L", "XL"].map((s) => (
              <span
                key={s}
                className="border w-8 h-8 flex items-center justify-center rounded-full cursor-pointer hover:border-[#46A358]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 mt-6">
          <button className="bg-[#46A358] text-white px-6 py-3 rounded-md">
            BUY NOW
          </button>

          <button className="border border-[#46A358] text-[#46A358] px-6 py-3 rounded-md">
            Add To Cart
          </button>

          <button className="border p-3 rounded-md">
            <HeartOutlined />
          </button>
        </div>

        {/* META */}
        <div className="mt-6 text-sm text-gray-500">
          <p>SKU: {product._id}</p>
          <p>Categories: house-plants</p>
          <p>Tags: Home, Garden Plants</p>
        </div>
      </div>
    </div>
  );
};

export default PreviewContent;
