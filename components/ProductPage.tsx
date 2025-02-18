"use client";
import React from "react";
import ProductCard from "./custom/ProductCard";
// import useGetPro from "@/hooks/useGetPro";
import { ProductPropTypes } from "@/constant/type";
import useProduct from "@/lib/zustand/useProduct";
import PaginationUi from "./custom/PaginationUi";

const ProductPage = () => {
  // const { isLoading } = useGetPro(1);

  const { product } = useProduct();

  return (
    <div className="bg-white p-2  rounded-xl  ">
      <div className="flex-1   flex flex-row  items-start justify-start h-[70rem]">
        <div className="w-full flex flex-row flex-wrap gap-10 m-2">
          {product?.map((item: ProductPropTypes, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div>
        <PaginationUi />
      </div>
    </div>
  );
};

export default ProductPage;
