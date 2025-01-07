"use client";
import React from "react";
import ProductCard from "./custom/ProductCard";
import useGetPro from "@/hooks/useGetPro";
import { ProductTypeProps } from "@/constant/type";

const ProductPage = () => {
  const { data } = useGetPro();

  return (
    <div className="flex-1  rounded-xl  bg-white flex flex-row  items-center justify-center">
      <div className="w-[58rem] flex flex-row flex-wrap gap-6 m-2 p-2">
        {data?.map((item: ProductTypeProps) => (
          <ProductCard key={item.id} data={item} />
        ))}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default ProductPage;
