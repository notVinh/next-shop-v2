import React from "react";
import ProductPage from "@/components/ProductPage";
import SideBar from "@/components/SideBar";
import SortNavProduct from "@/components/SortNavProduct";

const Product = async () => {
  return (
    <div className="font-semibold text-sm text-gray-600 h-[70rem]">
      <div className=" flex flex-row gap-2 my-2 h-full">
        <SideBar />
        <div className="bg-white flex-1 rounded-xl overflow-hidden">
          <SortNavProduct />
          <ProductPage />
        </div>
      </div>
    </div>
  );
};

export default Product;
