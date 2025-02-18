"use client";
import BreadcrumbUi from "@/components/custom/BreadcrumbUi";
import ProductPage from "@/components/ProductPage";
import SideBar from "@/components/SideBar";
import SortNavProduct from "@/components/SortNavProduct";
// import useUser from "@/lib/zustand/useUser";
// import { Glasses, Search } from "lucide-react";
import Image from "next/image";

import React from "react";

const Product = () => {
  // const { user } = useUser();
  // console.log(user);
  return (
    <div className="font-semibold text-sm text-gray-600">
      <div className="px-3">
        <BreadcrumbUi des="Product" />
      </div>
      <div className=" flex flex-row gap-2">
        <SideBar />
        <div className="flex-1">
          <SortNavProduct />
          <ProductPage />
        </div>
      </div>
      <div>
        <Image
          src="/images/footerbanner.jpg"
          alt="footerbanner"
          width={500}
          height={500}
        ></Image>
      </div>
    </div>
  );
};

export default Product;
