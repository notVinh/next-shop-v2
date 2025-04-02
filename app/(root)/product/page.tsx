"use client";
import ProductPage from "@/components/ProductPage";
import SideBar from "@/components/SideBar";
import SortNavProduct from "@/components/SortNavProduct";
// import useUser from "@/lib/zustand/useUser";
// import { Glasses, Search } from "lucide-react";

import React from "react";

const Product = () => {
  // const { user } = useUser();
  // console.log(user);
  return (
    <div className="font-semibold text-sm text-gray-600 h-[70rem]">
      {/* <div className="px-3">
        <BreadcrumbUi des="Product" />
      </div> */}
      <div className=" flex flex-row gap-2 my-2 h-full">
        {/* <FilterDrawler /> */}
        <SideBar />
        <div className="bg-white flex-1 rounded-xl overflow-hidden">
          <SortNavProduct />
          <ProductPage />
        </div>
        {/* <div className="flex-1 h-full">
          <SortNavProduct />

        </div> */}
      </div>
      {/* <div className="w-full h-96 h rounded-xl overflow-hidden my-4 object-scale-down">
        <Image
          src="/images/Productend.jpg"
          alt="footerbanner"
          width={1500}
          height={1500}
          className="w-full h-auto rounded-xl object-center"
        ></Image>
      </div> */}
    </div>
  );
};

export default Product;
