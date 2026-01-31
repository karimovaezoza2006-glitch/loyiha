import {  useState, type FC } from "react";
import type { ProductType } from "../../../../@types";
import {
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import NewsletterSection from "../../../../pages/home/NewsletterSection";
import { Footer } from "antd/es/layout/layout";

interface Props {
  open: boolean;
  onClose: () => void;
  product: ProductType | null;
}

const ProductPreview: FC<Props> = ({ open, onClose, product }) => {
  const [activeSize, setActiveSize] = useState("XL");

  if (!open || !product) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] overflow-y-auto">

      <div className="container mx-auto px-4 pt-6 text-sm flex items-center gap-2">
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-[#46A358] transition"
        >
          Home
        </button>
        <span className="text-gray-400">/</span>
        <span className="text-[#46A358] font-medium">
          {product.title}
        </span>
      </div>


      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-14">
      
        <div className="flex gap-6">
       
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="border rounded-md p-2 cursor-pointer hover:border-[#46A358] transition"
              >
                <img
                  src={product.main_image}
                  alt="thumbnail"
                  className="w-[70px] h-[70px] object-contain"
                />
              </div>
            ))}
          </div>

     
          <div className="border rounded-lg flex items-center justify-center p-10 w-full">
            <img
              src={product.main_image}
              alt={product.title}
              className=" W-full h-full object-contain bg-white"
            />
          </div>
        </div>

        <div>
          <h1 className="text-[32px] font-semibold ">
            {product.title}
          </h1>

          <div className="flex items-center gap-6 mt-3">
            <span className="text-[#46A358] text-[22px] font-bold">
              ${product.price}
            </span>
            <span className="text-gray-400 text-sm">
              ★★★★★ (0 Customer Reviews)
            </span>
          </div>

          <hr className="my-6" />

 
          <h3 className="font-medium mb-2">Short Description:</h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {product.short_description ||
              "This product description comes from backend. You can describe plant care, delivery information, warranty and more details here."}
          </p>

   
          <div className="mt-8">
            <p className="font-medium mb-3">Size:</p>
            <div className="flex gap-3">
              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-10 h-10 rounded-full border transition
                    ${
                      activeSize === size
                        ? "border-[#46A358] text-[#46A358]"
                        : "hover:border-[#46A358]"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>


          <div className="flex gap-4 mt-10">
            <button className="bg-[#46A358] text-white px-10 py-3 rounded-md hover:bg-[#3e8e4e] transition">
              BUY NOW
            </button>

            <button className="border border-[#46A358] text-[#46A358] px-8 py-3 rounded-md hover:bg-[#46A358] hover:text-white transition">
              <ShoppingCartOutlined /> Add To Cart
            </button>

            <button className="border px-4 py-3 rounded-md hover:border-[#46A358] hover:text-[#46A358] transition">
              <HeartOutlined />
            </button>
          </div>

      
          <div className="text-sm text-gray-500 mt-10 space-y-2">
            <p>
              <span className="font-medium">SKU:</span>{" "}
              {product._id}
            </p>
            <p>
              <span className="font-medium">Category:</span>{" "}
              House-Plants
            </p>
            <p>
              <span className="font-medium">Tags:</span> Home,
              Garden, Plants
            </p>
          </div>


          <div className="mt-8 flex items-center gap-4 text-gray-600">
            <span className="font-medium">Share this product:</span>
            <span className="cursor-pointer hover:text-[#46A358]">
              Facebook
            </span>
            <span className="cursor-pointer hover:text-[#46A358]">
              Twitter
            </span>
            <span className="cursor-pointer hover:text-[#46A358]">
              Linkedin
            </span>
          </div>
          
        </div>
        
      </div>
<NewsletterSection/>
<Footer/>

    </div>
  );
};

export default ProductPreview;
